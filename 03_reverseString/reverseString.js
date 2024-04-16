const reverseString = function(phrase) {
    let result = '';
    for(let i = phrase.length; i >= 0; i--){
        result += phrase.charAt(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
