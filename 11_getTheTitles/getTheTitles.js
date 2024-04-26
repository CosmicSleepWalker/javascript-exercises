const getTheTitles = function(books) {
    let arr = [];
    console.log(books[0].title);
    books.forEach((book, index) => {
        arr[index] = book.title;
    });
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
