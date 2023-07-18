
/* 

function factorialIterative(numbFactorial) {

    let result = 1;
    for (let i = 1; i <= numbFactorial; i++) {
        console.log("eu sou o i: " + i);
        result = result * i; 
        console.log("eu sou o result vezes o i: " + result);
    }

    return result;
}


console.log(factorialIterative(5));




 */



function recursive(numb){

    let result = numb * recursive(numb - 1);

    return result;

}

console.log(recursive(5));



