const findTheOldest = function(people) {
    let oldest = people[0];

    for(let i = 0; i < people.length; i++){
        let date = new Date();
        let currentOldestAge = oldest.yearOfDeath === undefined? date.getFullYear() - oldest.yearOfBirth : oldest.yearOfDeath - oldest.yearOfBirth;
        let currentAge = people[i].yearOfDeath - people[i].yearOfBirth;
        if(people[i].yearOfDeath === undefined){
            let livingAge = date.getFullYear() - people[i].yearOfBirth;
            if( livingAge > currentOldestAge){
                oldest = people[i];
            }
        } else if(currentOldestAge < currentAge){
            oldest = people[i];
        }

    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
