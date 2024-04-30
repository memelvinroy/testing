function capitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}


function reverse(str1){
return str1.split('').reverse().join('')

}

const calculator = {
    add:(a,b)=> a+b,
    sub:(a,b)=> a-b,
    mul:(a,b)=> a*b,
    div:(a,b)=> (b===0 ? undefined : a/b ),
}

const ccipher = (value,key) =>
    value.split("")
    .map((letter) => String.fromCharCode(letter.charCodeAt(0) + key))
    .join("")

    function analyzeArray(array) {
        if (array.length === 0) {
            return null;
        }
    
        array.sort((a, b) => {
            return a - b;
         });
    
         const sum = array.reduce((acc, val) => {
         return acc + val;
         });
    
        return {
            average: sum / array.length,
            min: array[0],
            max: array[array.length - 1],
            length: array.length
        };
    }

module.exports = {capitalize,reverse,calculator,ccipher,analyzeArray};
