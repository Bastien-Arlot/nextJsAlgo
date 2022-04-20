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

//Exercice 1 sujet 1

const addAndCompare = (data, num) => {
    let compare = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            compare++;
            if ((data[i] + data[j]) === num) {
                console.log(`Nous assistons ici à une complexité de ${compare}`);
                return true ;
            }

        }
    }
    console.log(`Nous assistons ici à une complexité de ${compare}`);
    return false;
}

console.log(addAndCompare(arr, 17));

// Exercice 3 & 5 sujet 1

const addAndCompare2 = (data, num) => {
    let compare = 0;
    let searchValues = new Set();
    searchValues.add(num - data[0]);
    for (let i = 1, length = data.length; i < length; i++) {
        compare++;
        let searchVal = num - data[i];
        if (searchValues.has(data[i])) {
            console.log(`Nous assistons ici à une complexité de ${compare}`);
            return true;
        } else {
            searchValues.add(searchVal);
        }
    }

    console.log(`Nous assistons ici à une complexité de ${compare}`);
    return false;
};
console.log(addAndCompare2(arr, 19));