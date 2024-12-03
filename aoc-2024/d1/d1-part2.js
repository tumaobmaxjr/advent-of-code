const fs = require('fs');

fs.readFile('input.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error);
        return;
    }
    result(data);
});

function result(data) {
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

    let totalSimilarityScore = 0;
    for (let i = 0; i < list1.length; i++) {
        let count = 0;
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] == list2[j]) {
                count++;
            }
        }

        let similarityScore = 0;
        similarityScore = list1[i] * count;
        totalSimilarityScore += similarityScore;
    }

    console.log(totalSimilarityScore);
}
