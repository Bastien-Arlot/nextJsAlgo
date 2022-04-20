let fs = require('fs');
let arr;

const fileName = process.argv[2];
if(!fileName) {
    console.log("Aucun fichier de données");
}

try {
    arr = fs.readFileSync(process.argv[2], "utf8");
} catch (error) {
    console.log("Le fichier renseigné déclanche les erreurs suivantes :");
    console.error(error);
    return;
};


arr = arr.split(" ").map((elem) => (!isNaN(Number(elem)) ? Number(elem) : null)).filter(Boolean);

if (arr.length < 1) {
    console.log("Aucun nombre dans le fichier de données renseigné");
    return;
};
console.log(arr.length);
    //BubbleSort
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
    let arrDuplicated = [...arr];
    console.log(bubbleSort(arrDuplicated));



    //Insertion Sort Algorithmns
    const insertionSort = (data) => {
        let compare = 0;
        for (let i = 1; i < data.length; i++) {
            let tmp = data[i];
            let j = i;
            while (j > 0 && data[j - 1] > tmp) {
                compare++;
                data[j] = data[j - 1];
                j = j - 1;
            }
            data[j] = tmp;
        }
        console.log(`Tri par insertion: ${compare} comparaisons`);
        return data;
    };
arrDuplicated = [...arr];
    console.log(insertionSort(arrDuplicated));

    // Select sort
    const selectSort = (data) => {
        let compare = 0;
        for (let i = 0; i < data.length - 1; i++) {
            min = i;
            for (let j = i + 1; j < data.length; j++) {
                compare++;
                if (data[j] < data[min]) {
                    min = j;
                }
            }
            if (min != i) {
                let tmp = data[i];
                data[i] = data[min];
                data[min] = tmp;
            }
        }

        console.log(`Tri par selection: ${compare} comparaisons`);
        return data;
    };
    arrDuplicated = [...arr];
    console.log(selectSort(arrDuplicated));

    // Quick sort
    const quickSort = (data) => {
        let compare = 0;
        const sort = (data) => {
            if (data.length <= 1) return data;
            let pivot = data[data.length - 1];
            let left = [];
            let right = [];
            for (let i = 0; i < data.length - 1; i++) {
                if (data[i] < pivot) {
                    left.push(data[i]);
                } else {
                    right.push(data[i]);
                }
                compare++;
            }
            return [...sort(left), pivot, ...sort(right)];
        };
        data = sort(data);
        console.log(`Tri rapide: ${compare} comparaisons`);
        return data;
    };

    arrDuplicated = [...arr];
    console.log(quickSort(arrDuplicated));

    // Merge sort
    const mergeSort = (data) => {
        let compare = 0;
        const merge = (left, right) => {
            let result = [];

            while (left.length && right.length) {
                if (left[0] <= right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }
            }
            while (left.length) {
                result.push(left.shift());
            }
            while (right.length) {
                result.push(right.shift());
            }
            return result;
        };

        const sort = (data) => {
            compare++;
            if (data.length < 2) {
                return data;
            }
            let middle = Math.floor(data.length / 2);
            let left = data.slice(0, middle);
            let right = data.slice(middle, data.length);
            return merge(sort(left), sort(right));
        };
        data = sort(data);
        console.log(`Tri fusion : ${compare} comparaisons`);
        return data;
    };
    arrDuplicated = [...arr];
    console.log(mergeSort(arrDuplicated));
