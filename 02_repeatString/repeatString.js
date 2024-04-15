const repeatString = (value, num) => {
    let repeat = "";
    if(num < 0){
        return "ERROR";
    }
    for(let i = 0; i < num; i++){
        repeat += value;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
