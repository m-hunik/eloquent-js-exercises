let size = 8;

let board = "";

for(let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((y + x) % 2 == 0) {
            console.log("#");
        } else {
            console.log(" ");
        }
    }
}