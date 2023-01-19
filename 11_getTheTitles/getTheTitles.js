const getTheTitles = function(getBooks) {
let getTheTitle=[]
for(i=0;i<getBooks.length;i++){
    getTheTitle.push(getBooks[i].title)
}
return getTheTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
