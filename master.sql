-- View: public.billable_entity

-- DROP VIEW public.billable_entity;

CREATE OR REPLACE VIEW public.billable_entity
 AS
 SELECT row_number() OVER () AS id,
    b.entity_id,
    b.client_id,
    b.po_number,
    b.date,
    b.attribute,
    b.billing_type_id
   FROM ( SELECT o.id AS entity_id,
            o.client_id,
            o.po_number,
            max(ois.shipped_date) AS date,
            '{}'::jsonb AS attribute,
            3 AS billing_type_id
           FROM orders o
             JOIN order_item_summary ois ON ois.order_id = o.id
          WHERE NOT (o.id IN ( SELECT order_item_summary.order_id
                   FROM order_item_summary
                  WHERE (order_item_summary.committed_date IS NULL OR order_item_summary.order_item_status_id < 8) AND order_item_summary.order_item_status_id <> 1)) AND o.billed IS NOT TRUE AND ois.committed_date IS NOT NULL
          GROUP BY o.id, o.client_id, o.po_number
        UNION ALL
         SELECT oi.id AS entity_id,
            o.client_id,
            o.po_number,
            ois.shipped_date AS date,
            (((((((('{"external_product_id": "'::text || p.external_product_id::text) || '", "weight": '::text) || p.weight) || ', "name": "'::text) || mp.name::text) || '", "quantity": '::text) || oi.quantity) || '}'::text)::jsonb AS attribute,
            4 AS billing_type_id
           FROM order_item_summary ois
             JOIN order_item oi ON oi.id = ois.id
             JOIN orders o ON o.id = ois.order_id
             JOIN product p ON p.id = ois.product_id
             JOIN master_product mp ON mp.id = p.master_product_id
          WHERE NOT (o.id IN ( SELECT order_item_summary.order_id
                   FROM order_item_summary
                  WHERE (order_item_summary.committed_date IS NULL OR order_item_summary.order_item_status_id < 8) AND order_item_summary.order_item_status_id <> 1)) AND oi.weight_billed IS NOT TRUE AND ois.committed_date IS NOT NULL
        UNION ALL
         SELECT os.id AS entity_id,
            pa.client_id,
            string_agg(pa.po_number::text, ','::text) AS po_number,
            os.completion_date AS date,
            (('{"shipping_price": '::text || os.shipping_cost) || '}'::text)::jsonb AS attribute,
            5 AS billing_type_id
           FROM outgoing_shipment os
             JOIN outgoing_shipment_manifest osm ON osm.id = os.outgoing_shipment_manifest_id
             JOIN shipping_company sc ON sc.id = os.shipping_company_id
             JOIN ( SELECT pai.outgoing_shipment_id,
                    o.client_id,
                    o.po_number
                   FROM pack_item pai
                     JOIN pick_item pii ON pii.id = pai.pick_item_id
                     JOIN pick_item_transaction pit ON pit.id = pii.pick_item_transaction_id
                     JOIN order_item oi ON oi.id = pit.order_item_id
                     JOIN orders o ON o.id = oi.order_id
                  GROUP BY pai.outgoing_shipment_id, o.client_id, o.po_number) pa ON pa.outgoing_shipment_id = os.id
          WHERE os.billed IS NOT TRUE AND osm.commited_date IS NOT NULL AND sc.billing_type_id IS NULL
          GROUP BY os.id, pa.client_id, os.completion_date
        UNION ALL
         SELECT ism.id AS entity_id,
            ism.client_id,
            ism.po_number,
            t.last_transaction_time AS date,
            (((('{"unit_type_id": '::text || ism.amount_unit_type_id) || ', "amount": '::text) || ism.amount) || '}'::text)::jsonb AS attribute,
            6 AS billing_type_id
           FROM incoming_shipment ism
             LEFT JOIN ( SELECT DISTINCT incoming_shipment_item.incoming_shipment_id
                   FROM incoming_shipment_item
                  WHERE (incoming_shipment_item.id IN ( SELECT incoming_shipment_item_receivable.id
                           FROM incoming_shipment_item_receivable))) isr ON isr.incoming_shipment_id = ism.id
             JOIN ( SELECT isi.incoming_shipment_id,
                    max(it.occurrence) AS last_transaction_time
                   FROM incoming_shipment_item_transaction isit
                     JOIN incoming_shipment_item isi ON isi.id = isit.incoming_shipment_item_id
                     JOIN inventory_transaction it ON it.id = isit.inventory_transaction_id
                  GROUP BY isi.incoming_shipment_id) t ON t.incoming_shipment_id = ism.id
          WHERE ism.billed IS NOT TRUE AND isr.incoming_shipment_id IS NULL
        UNION ALL
         SELECT o.id AS entity_id,
            o.client_id,
            o.po_number,
            max(ois.shipped_date) AS date,
            (('{"name": "'::text || oft.name::text) || '"}'::text)::jsonb AS attribute,
            8 AS billing_type_id
           FROM order_file_type oft
             JOIN order_file f ON f.order_file_type_id = oft.id
             JOIN aws_s3_operation aso ON aso.id = f.operation_id
             JOIN orders o ON f.order_id = o.id
             JOIN order_item_summary ois ON ois.order_id = o.id
          WHERE aso.operation_type_id <> 4 AND NOT (o.id IN ( SELECT order_item_summary.order_id
                   FROM order_item_summary
                  WHERE (order_item_summary.committed_date IS NULL OR order_item_summary.order_item_status_id < 8) AND order_item_summary.order_item_status_id <> 1)) AND f.billed IS NOT TRUE AND ois.committed_date IS NOT NULL
          GROUP BY o.id, o.client_id, o.po_number, oft.id
        UNION ALL
         SELECT os.id AS entity_id,
            pa.client_id,
            string_agg(pa.po_number::text, ','::text) AS po_number,
            os.completion_date AS date,
            '{}'::jsonb AS attribute,
            9 AS billing_type_id
           FROM outgoing_shipment os
             JOIN outgoing_shipment_manifest osm ON osm.id = os.outgoing_shipment_manifest_id
             JOIN ( SELECT pai.outgoing_shipment_id,
                    o.client_id,
                    o.po_number
                   FROM pack_item pai
                     JOIN pick_item pii ON pii.id = pai.pick_item_id
                     JOIN pick_item_transaction pit ON pit.id = pii.pick_item_transaction_id
                     JOIN order_item oi ON oi.id = pit.order_item_id
                     JOIN orders o ON o.id = oi.order_id
                  GROUP BY pai.outgoing_shipment_id, o.client_id, o.po_number) pa ON pa.outgoing_shipment_id = os.id
          WHERE os.packing_slip_billed IS NOT TRUE AND os.packing_slip_generated IS NOT NULL AND os.packing_slip_generated = true AND osm.commited_date IS NOT NULL
          GROUP BY os.id, pa.client_id, os.completion_date
        UNION ALL
         SELECT os.id AS entity_id,
            pa.client_id,
            string_agg(pa.po_number::text, ','::text) AS po_number,
            os.completion_date AS date,
            '{}'::jsonb AS attribute,
            sc.billing_type_id
           FROM outgoing_shipment os
             JOIN outgoing_shipment_manifest osm ON osm.id = os.outgoing_shipment_manifest_id
             JOIN shipping_company sc ON sc.id = os.shipping_company_id
             JOIN ( SELECT pai.outgoing_shipment_id,
                    o.client_id,
                    o.po_number
                   FROM pack_item pai
                     JOIN pick_item pii ON pii.id = pai.pick_item_id
                     JOIN pick_item_transaction pit ON pit.id = pii.pick_item_transaction_id
                     JOIN order_item oi ON oi.id = pit.order_item_id
                     JOIN orders o ON o.id = oi.order_id
                  GROUP BY pai.outgoing_shipment_id, o.client_id, o.po_number) pa ON pa.outgoing_shipment_id = os.id
          WHERE os.billed IS NOT TRUE AND osm.commited_date IS NOT NULL AND sc.billing_type_id IS NOT NULL
          GROUP BY sc.billing_type_id, os.id, pa.client_id, os.completion_date
		 UNION ALL
         SELECT os.id AS entity_id,
            pa.client_id,
            string_agg(pa.po_number::text, ','::text) AS po_number,
            os.completion_date AS date,
            '{}'::jsonb AS attribute,
            11 AS billing_type_id
           FROM outgoing_shipment os
             JOIN outgoing_shipment_manifest osm ON osm.id = os.outgoing_shipment_manifest_id
             JOIN shipping_company sc ON sc.id = os.shipping_company_id
             JOIN ( SELECT pai.outgoing_shipment_id,
                    o.client_id,
                    o.po_number
                   FROM pack_item pai
                     JOIN pick_item pii ON pii.id = pai.pick_item_id
                     JOIN pick_item_transaction pit ON pit.id = pii.pick_item_transaction_id
                     JOIN order_item oi ON oi.id = pit.order_item_id
                     JOIN orders o ON o.id = oi.order_id
                  GROUP BY pai.outgoing_shipment_id, o.client_id, o.po_number) pa ON pa.outgoing_shipment_id = os.id
          WHERE os.billed IS NOT TRUE AND osm.commited_date IS NOT NULL AND sc.billing_type_id IS NOT NULL
          GROUP BY sc.billing_type_id, os.id, pa.client_id, os.completion_date
		) b;

ALTER TABLE public.billable_entity
    OWNER TO postgres;

GRANT ALL ON TABLE public.billable_entity TO postgres;
GRANT ALL ON TABLE public.billable_entity TO wguser WITH GRANT OPTION;

