import Big from 'big.js';

export default function operate (firstNumber,secondNumber, operation) {
    const one = Big(firstNumber)
    const two = Big(secondNumber)
    if(operation === "+"){
        return one.plus(two).toString();
    }
    if(operation === "-"){
        return one.minus(two).toString();
    }
    if(operation === "/"){
        if(parseInt(two) === 0){
            alert("error");
            return 0;
        }
         return one.div(two).toString();
    }
    if(operation === "X"){
         return one.times(two).toString();
    }
    throw Error(`Unknown operation '${operation}'`);
}