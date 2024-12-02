const fs = require('fs');

fs.readFile('input.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error);
        return;
    }
    totalDifference(data);
});

function totalDifference(data) {
    const lines = data.split('\n');

    const list1 = [];
    const list2 = [];

    for (let i = 0; i < lines.length; i++) {
        const parts = lines[i].trim().split(/\s+/); // Split by any whitespace
        if (parts.length === 2) {
            list1.push(parts[0]);
            list2.push(parts[1]);
        }
    }

    list1.sort();
    list2.sort();

    let totalDistance = 0;
    for (let i = 0; i < lines.length; i++) {
        distance = Math.abs(list1[i] - list2[i]);
        totalDistance += distance;
    }

    console.log(totalDistance);
}
