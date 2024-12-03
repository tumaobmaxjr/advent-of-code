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
    let safeReports = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim().split(/\s+/).map(Number);


        let differences = [];

        for (let j = 0; j < line.length - 1; j++) {
            let diff = line[j] - line[j + 1];
            differences.push(diff);

        }

        let isValid = true;
        let isDecreasing = true;
        let isIncreasing = true;

        for (let k = 0; k < differences.length; k++) {
            if (Math.abs(differences[k]) < 1 || Math.abs(differences[k]) > 3) {
                isValid = false;
                break;
            }

            if (differences[k] < 0) {
                isDecreasing = false;
            } else if (differences[k] > 0) {
                isIncreasing = false;
            }
        }

        const isSafe = isValid && (isIncreasing || isDecreasing);

        console.log(`${line}: ${isSafe ? 'Safe' : 'Unsafe'}`);

        if (isSafe) {
            safeReports.push(line);
        }
    }

    console.log(safeReports.length);
}
