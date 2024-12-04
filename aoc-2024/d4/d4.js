const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error);
        return;
    }
    result(data);
})

function result(data) {
    const lines = data.trim().split('\n');

    const word = 'XMAS';

    const grid = lines.map(row => row.split(''));

    console.log(searchWord(grid, word));
}

function searchWord(grid, word) {
    let numOfRows = grid.length;
    let numOfCols = grid[0].length;

    // 8 directions:
    // 1. x = -1, y = -1 (Up-left)
    // 2. x = -1, y = 0 (Up)
    // 3. x = -1, y = 1 (Up-right)
    // 4. x = 0, y = -1 (Left)
    // 5. x = 0, y = 1 (Right)
    // 6. x = 1, y = -1 (Down-left)
    // 7. x = 1, y = 0 (Down)
    // 8. x = 1, y = 1 (Down-right)
    let x = [-1, -1, -1, 0, 0, 1, 1, 1];
    let y = [-1, 0, 1, -1, 1, -1, 0, 1];

    let count = 0;

    function checkDirection(startX, startY, dirX, dirY) {
        for (let k = 0; k < word.length; k++) {
            let newX = startX + k * dirX;
            let newY = startY + k * dirY;

            if (
                newX < 0 || newX >= numOfRows || // Out of bounds vertically
                newY < 0 || newY >= numOfCols || // Out of bounds horizontally
                grid[newX][newY] !== word[k]    // Letter mismatch
            ) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < numOfRows; i++) {
        for (let j = 0; j < numOfCols; j++) {
            for (let d = 0; d < 8; d++) {
                if (checkDirection(i, j, x[d], y[d])) {
                    count++;
                }
            }
        }
    }

    return count;
}