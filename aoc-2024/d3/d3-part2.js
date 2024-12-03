const fs = require('fs');

fs.readFile('input.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error);
        return;
    }
    result(data);
});

function result(data) {
    const lines = data.trim().split('\n');
    let total = 0;
    let mulEnabled = true;

    for (let i = 0; i < lines.length; i++) {
        const regex = /mul\((\d+),(\d+)\)|don't\(\)|do\(\)/g;
        let match;

        while ((match = regex.exec(lines[i])) !== null) {
            if (match[0] === "don't()") {
                mulEnabled = false;
            } else if (match[0] === "do()") {
                mulEnabled = true;
            } else if (mulEnabled && match[1] && match[2]) {
                const num1 = parseInt(match[1]);
                const num2 = parseInt(match[2]);
                total += num1 * num2;
            }
        }
    }

    console.log(total);
}