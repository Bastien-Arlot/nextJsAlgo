const fs = require('fs');

const fileName = process.argv[2];

// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    console.log(data);
    const arr = data.split(" ").map(num => Number(num));
    const bubbleSort = (data) => {
        let compare = 0;
        for (let i = data.length - 1; i >= 1; i--) {
            for (let j = 0; j < i; j++) {
                compare++;
                if (data[j] > data[j + 1]) {
                    let tmp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = tmp;
                }
            }
        }
        console.log(`Tri à bulle: ${compare} comparaisons`);
        return data;
    };
    bubbleSort(arr);
    console.log(arr);
});