class Node {

    constructor(key) {
        this.data = key
        this.left = null
        this.right = null
    }
}

let root = new Node(10)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(7)
root.left.right = new Node(8)
root.right.right = new Node(15)
root.right.left = new Node(12)
root.right.right.left = new Node(14)

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


const leftView = (root) => {

    const queue = new Queue();
    queue.enqueue(root);
    queue.enqueue(null);
    console.log(root.data);

    while (queue.size() > 1) {
        const frontNode = queue.dequeue();
        if (frontNode === null) {
            queue.enqueue(null);
            console.log(queue.peek().data);
        }

        if (frontNode && frontNode.left !== null) {
            queue.enqueue(frontNode.left);
        }

        if (frontNode && frontNode.right !== null) {
            queue.enqueue(frontNode.right);
        }
    }
}

leftView(root);