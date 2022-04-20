const fs = require('fs');
let arr;

const fileName = process.argv[2];
if (!fileName) {
    console.log("Aucun fichier de données");
}

try {
    arr = fs.readFileSync(process.argv[2], "utf8");
} catch (error) {
    console.log("Le fichier renseigné déclanche les erreurs suivantes :");
    console.error(error);
    return;
}
arr = arr.split(" ").map((elem) => (!isNaN(Number(elem)) ? Number(elem) : null)).filter(Boolean);

if (arr.length < 1) {
    console.log("Aucun nombre dans le fichier de données renseigné");
    return;
}
;
console.log(arr);

// Exercice 2 Sujet 2
const buildingWithView = (data) => {
    let compare = 0;
    let sunsetView = 0;
    for (let i = 0; i < data.length; i++) {
        let hasView = 1;
        for (let j = i + 1; j < data.length; j++) {
            compare++;
            if (data[i] <= data[j]) {
                hasView = 0;
            }
        }
        sunsetView += hasView;
    }
    console.log(`Nous assistons ici à une complexité de ${compare}`);
    return sunsetView;
};

console.log(buildingWithView(arr));

//Exercice 4 et 6

const buildingWithView2 = (data) => {
    let compare = 0;
    let count = 1;
    let max = data[data.length - 1];
    for (let j = data.length - 2; j >= 0; j--) {
        compare++;
        if (data[j] > max) {
            max = data[j];

            count++;
        }
    }
    console.log(`Nous assistons ici à une complexité de ${compare}`);
    return count;
};