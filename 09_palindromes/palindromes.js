const palindromes = function (phrase) {
    const punctuation = /[.,/! ]/g;
    const removedPunctuations = phrase.replace(punctuation, '').toUpperCase();
    let i = 0;
    let j = removedPunctuations.length - 1;
    let result = true;
    while(i < j){
        if(removedPunctuations.charAt(i) !== removedPunctuations.charAt(j)){
            result = false;
            break;
        }
        i++;
        j--;
    }
    return result;
};

// Do not edit below this line
module.exports = palindromes;
