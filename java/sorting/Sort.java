package sorting;

import java.util.Arrays;

public class Sort {
    // INSERTION-SORT
    public void insertionSort(int[] intArray) {
        int size = intArray.length;
        // int[] newArray = new int[size];

        for (int i = 1; i < size; i++) {
            int key = intArray[i];
            int j = i - 1;

            while (j >= 0 && key < intArray[j]) {
                intArray[j + 1] = intArray[j];
                j--;
            }
            intArray[j + 1] = key;
        }
        System.out.println("Sorted Array: ");
        for (int num : intArray) {
            System.out.print(num + " ");
        }

    }

    public void insertionSortDesc(int[] intArray) {
        int size = intArray.length;

        for (int i = 1; i < size; i++) {
            int j = i - 1;
            int key = intArray[i];

            while (j >= 0 && key > intArray[j]) {
                intArray[j + 1] = intArray[j];
                j--;
            }
            intArray[j + 1] = key;
        }

        for (int num : intArray) {
            System.out.println(num + " ");
        }
    }

    public void selectionSort(int[] intArray) {
        int size = intArray.length;
        for (int i = 0; i < size - 1; i++) {
            int min_index = i;

            for (int j = i + 1; j < size; j++) {
                if (intArray[min_index] > intArray[j]) {
                    min_index = j;
                }
            }
            int temp = intArray[i];
            intArray[i] = intArray[min_index];
            intArray[min_index] = temp;
        }

        for (int num : intArray) {
            System.out.println(num + " ");
        }
    }

    public void bubbleSort(int[] arr) {
        int size = arr.length;

        for (int i = size; i > 0; i--) {
            boolean swapped = false;
            for(int j = 0; j<i-1; j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;
                }
            }
            System.out.println("swapped " + swapped);
            if(!swapped) break;
        }

        for (int num : arr) {
            System.out.println(num + " ");
        }
    }

    public static void main(String[] args) {
        int[] intArray = new int[] { 300, -20, -15, 5, 7, 1, 3, 2, 4, 10, 124 };

        Sort sort = new Sort();
        // sort.insertionSort(intArray);
        // sort.insertionSortDesc(intArray);
        // sort.selectionSort(intArray);
        sort.bubbleSort(intArray);

    }
}
