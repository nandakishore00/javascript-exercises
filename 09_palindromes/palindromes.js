const palindromes = function (string) {
 let i=0
string=string.toLowerCase()
 let finalString=""
 let j=(string.length)-1
for(i;i<=j;i++){
    if(string[i]==',' ||string[i]==" "||string[i]=="!"||string[i]=="."){
        continue
    }
    else{
        finalString+=string[i]
    }
 }
i=0
j=(finalString.length)-1
while(i<j){
    if(finalString[i]===finalString[j]){
            i+=1
            j-=1
            continue
}
else{
    return false
}

}return true};

// Do not edit below this line
module.exports = palindromes;
