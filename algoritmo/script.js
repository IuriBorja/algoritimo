


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

/* console.log(arr2); // Exibe o arr2 com os números em ordem crescente */


/* ----------------------------------- */





function AC_ (week) {

    let result = 14 - week;

    return console.log(`We are in week ${week} and there are ${result} weeks left until the end...#crying`);
}


AC_(2);


/* --------------------------------- */



let list = [3, 1, 7, 23, 12, 14, 18];


for (let i = 0; i < list.length; i++) {
    let min = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[min]) {
                min = j;
            }
        }

        if (min !== i) {
            let temp = list[i];
            list[i] = list[min];
            list[min] = temp;
        }
    
}


console.log(list);