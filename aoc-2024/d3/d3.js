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

    for (let i = 0; i < lines.length; i++) {
        const regex = /mul\((\d+),(\d+)\)/g;
        let match;
        let result = 0;

        while ((match = regex.exec(lines[i])) !== null) {
            const num1 = parseInt(match[1]);
            const num2 = parseInt(match[2]);
            result += num1 * num2;
        }
        total += result;
    }

    console.log(total);
}
