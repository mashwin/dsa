/**
 * Find floor value in a Binary Search Tree
 * 
 */
class Node {

    constructor(key) {
        this.data = key
        this.left = null
        this.right = null
    }
}

root = new Node(8)
root.left = new Node(4)
root.right = new Node(12)
root.left.left = new Node(2)
root.left.right = new Node(6)
root.right.left = new Node(10)
root.right.right = new Node(14)


const floor = (root, key) => {
    while (root != null) {
        if (root.data < key) {
            ans = root.data;
            root = root.right;
        } else {
            root = root.left;
        }
    }
}

let ans = Number.NEGATIVE_INFINITY;
floor(root, 15);

console.log('result: ', ans);