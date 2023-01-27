

let intervals = [[1, 3], [6, 9]];
let new_interval = [2, 5];

const result = [];
for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < new_interval[0]) {
        result.push(intervals[i]);
    } else if (intervals[i][0] > new_interval[1]) {
        result.push(new_interval);
        new_interval = intervals[i];
    } else {
        new_interval[0] = Math.min(new_interval[0], intervals[i][0]);
        new_interval[1] = Math.max(new_interval[1], intervals[i][1]);
    }
}

result.push(new_interval);

console.log('*** result ***', result);