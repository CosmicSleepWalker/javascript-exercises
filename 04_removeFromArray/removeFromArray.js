// paramaters( array, an array of numbers to remove which acts as arguments)
const removeFromArray = function(arr, ...numbersToRemove) {
    for(let j = 0; j < arr.length; j++){
        for(let i = 0; i < numbersToRemove.length; i++){
            let index = arr.indexOf(numbersToRemove[i]);
            if(index >= 0){
                arr.splice(index, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
