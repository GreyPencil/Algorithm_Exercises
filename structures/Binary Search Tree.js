class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNewNode(newNode, this.root);
        }

    }

    insertNewNode(node, root) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNewNode(node, root.left)
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNewNode(node, root.right)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true
            } else if (value > root.value) {
                return this.search(root.right, value)
            } else if (value < root.value) {
                return this.search(root.left, value)
            }
        }
    }

    preOrder(root) {
        if(root){
            console.log(root.value)
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)

        }
    }

    levelOrder(){
        const queue = [];
        queue.push(this.root);
        while(queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            } 
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }

    min(root) {
        if(!root.left) {
            return root.value;
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if(!root.right) {
            return root.value;
        } else {
            return this.min(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if(root === null) {
            return root;
        } 
        if(value < root.value){
             root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else { 
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            } else if(!root.right) {
                return root.left
            }
            root.value = this.min(root.right) 
            root.right = this.deleteNode(root.right, root.value)
        }
        return root;
    }
}

const bst = new BinarySearchTree();
console.log("tree is empty? " + bst.isEmpty());

bst.insert(10);
bst.insert(11);
bst.insert(3);
bst.insert(5);
bst.insert(15);

console.log("Tree is empty? " + bst.isEmpty())
console.log("Tree is root? " + bst.root.value)
console.log("search 10? " + bst.search(bst.root, 10))

bst.preOrder(bst.root);
bst.levelOrder();
console.log('bst.min()', bst.min(bst.root))
console.log('bst.max()', bst.max(bst.root))