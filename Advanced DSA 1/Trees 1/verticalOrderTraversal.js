class Node {

    constructor(key) {
        this.data = key
        this.left = null
        this.right = null
    }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
root.right.right.right = new Node(9);

class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(data) {
        this.items.push(data);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }

        return null;
    }

    print() {
        return this.items.toString();
    }
}

const verticalOrder = (root) => {

    const queue = new Queue();
    const obj = {};
    obj.node = root;
    obj.level = 0;

    queue.enqueue(obj);

    let minLevel = 0;
    let maxLevel = 1;

    while (queue.size() > 0) {

        const frontNode = queue.dequeue();
        let level = frontNode.level;

        minLevel = Math.min(level, minLevel);
        maxLevel = Math.max(level, maxLevel);

        if (hm.has(level)) {
            const arr = hm.get(level);
            arr.push(frontNode.node.data);
            hm.set(level, arr);
        } else {
            const arr = [];
            arr.push(frontNode.node.data);
            hm.set(level, arr);
        }

        if (frontNode.node.left != null) {
            const objTemp = {};
            objTemp.node = frontNode.node.left;
            objTemp.level = level - 1;
            queue.enqueue(objTemp);
        }

        if (frontNode.node.right != null) {
            const objTemp = {};
            objTemp.node = frontNode.node.right;
            objTemp.level = level + 1;
            queue.enqueue(objTemp);
        }
    }
}

const hm = new Map();
verticalOrder(root);