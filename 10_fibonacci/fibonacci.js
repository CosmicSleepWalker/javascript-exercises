const fibonacci = function(num) {
    num = parseInt(num);
    if(num === 0){
        return 0;
    }else if(num < 0){
        return "OOPS";
    }
    let counter = 1;
    let num1 = 1;
    let num2 = 1;
    while(counter < num){
        let temp = num2;
        num2 = num1 + num2;
        num1 = temp;
        counter++;
    }
    return num1;
};

// Do not edit below this line
module.exports = fibonacci;
