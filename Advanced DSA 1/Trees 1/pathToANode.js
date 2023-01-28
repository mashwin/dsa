/**
 * print path for root to a given node x
 */

class Node {

    constructor(key) {
        this.data = key
        this.left = null
        this.right = null
    }
}

const root = new Node(0);
root.left = new Node(1);
root.left.left = new Node(3);
root.left.left.left = new Node(7);
root.left.right = new Node(4);
root.left.right.left = new Node(8);
root.left.right.right = new Node(9);
root.right = new Node(2);
root.right.left = new Node(5);
root.right.right = new Node(6);

const getPath = (root, arr, key) => {

    if (root === null) {
        return false;
    }

    if (root.data === key) {
        arr.push(root.data);
        return true;
    }

    if (getPath(root.left, arr, key) || getPath(root.right, arr, key)) {
        arr.push(root.data);
        return true;
    }

}

const arr = [];
getPath(root, arr, 999);
console.log('result: ', arr);