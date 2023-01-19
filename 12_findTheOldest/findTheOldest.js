const findTheOldest = function(array) {
    let asnwer= array.reduce((prev,curr)=>{
        let prevAge=Age(prev.yearOfBirth,prev.yearOfDeath)
        let currAge=Age(curr.yearOfBirth,curr.yearOfDeath)
        return prevAge<currAge?curr:prev
    })
    return asnwer
            
function Age(birth,death){
    if(!death){
    death=new Date().getFullYear(); 
    }
    return death-birth
}

};

// Do not edit below this line
module.exports = findTheOldest;
