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

const hasNode = (root, key) => {
    if (root === null) {
        return false;
    }

    if (root.data === key) {
        return true;
    }

    left = hasNode(root.left, key);
    if (left) {
        return true;
    }

    right = hasNode(root.right, key);
    if (right) {
        return true;
    }

    return false;
}

const result = hasNode(root, 4);

console.log('the result: ', result);