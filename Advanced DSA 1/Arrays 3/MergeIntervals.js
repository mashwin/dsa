
/**
 * Given a set of non-overlapping intervals, insert a new interval
 * into the intervals (merge if necessary).
 * 
 * You may assume that the intervals were initially sorted
 * according to their start times.
 */

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0) {
            return "Stack Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0 ? true : false;
    }
}


const intervals = [[1, 3], [6, 9]];
const new_interval = [2, 5];
const stack = new Stack();


[1, 3], [2, 6], [8, 10], [15, 18]

for (let i = 0; i < intervals.length; i++) {
    if (stack.isEmpty()) {
        let start1 = intervals[i][0];
        let end1 = intervals[i][1];

        let start2 = new_interval[0];
        let end2 = new_interval[1];

        if (end1 >= start2) {
            const temp = [];
            temp.push(start1);
            temp.push(Math.max(end1, end2));
            stack.push(temp);
        } else {
            stack.push(intervals[i]);
        }
    } else {

        let interval = stack.pop();
        let start1 = interval[0];
        let end1 = interval[1];

        let start2 = intervals[i][0];
        let end2 = intervals[i][1];

        if (end1 >= start2) {
            const temp = [];
            temp.push(start1);
            temp.push(Math.max(end1, end2));
            stack.push(temp);
        } else {
            stack.push(interval);
            stack.push(intervals[i]);
        }
    }
}

console.log('stack items ', stack.items);
