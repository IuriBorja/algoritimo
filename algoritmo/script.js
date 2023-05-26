
/*
let arr1 = [1, 4, 6, 7, 2, 3];

let arr2 = [];

for(let i = 0; i < arr1.length; i++){
    arr1 = arr2.push(i);

    if(arr1[i] < arr2[0]) {
        arr2.push();
    } else {
        arr2.pop();
    }
    console.log(arr2[i]);
}

*/


let arr1 = [1, 4, 6, 7, 2, 3];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    let currentValue = arr1[i];
    let j = i - 1;

    while (j >= 0 && arr2[j] > currentValue) {
        arr2[j + 1] = arr2[j];
        j--;
    }

    arr2[j + 1] = currentValue;
}

console.log(arr2); // Exibe o arr2 com os números em ordem crescente
