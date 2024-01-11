/**
 * Binary Tree
 * 
 * Every node is a tree, and every node may have only 2 subtrees
 */
class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            let node = this.root;
            let newNode = new Node(value);
            while (node) {
                if (value > node.value) {
                    if (!node.right) break;
                    node = node.right;
                } else {
                    if (!node.left) break;
                    node = node.left;
                }
            }
            if (value > node.value) {
                node.right = newNode;
            } else {
                node.left = newNode;
            }
        }
    }

    print(root = this.root) {
        if (!root) return true;
        console.log(root.value);
        this.print(root.left);
        this.print(root.right);
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BinaryTree();
tree.add(5);
tree.add(7);
tree.add(5);
tree.add(49);
tree.add(4);
tree.add(3);
tree.add(4);

tree.print();