function printInvertedTriangle(i) {
    for (let row = i; row > 0; row--) {
        let line = '';
        for (let col = 0; col < row; col++) {
            line += '*';
        }
        console.log(line);
    }
}

let i = 6;
printInvertedTriangle(i);
