//Q1. Write a function that takes in a string and returns counts of each char in the string
/*const charCount = (str) => {
    let result = {}
    for(i=0; i<str.length; i++){
        let char = str[i].toLowerCase()
        //using a regex to make sure all characters are alphaneumeric
        if (/[a-z0-9]/.test(char)){
        if (result[char] >0){
            result[char] ++
        }else{
            result[char] =1
        }
    }
}
    return result;
}
console.log(charCount('hello isaac'))*/

//another way of doing it
 
const charCount = (str) => {
    let result = {}
    for(let char of str){   //loops over the string
        char = char.toLowerCase()
        //using a regex to make sure all characters are alphaneumeric
        if (/[a-z0-9]/.test(char)){
            //short-circuit evaluation (truthy and falsy)
            result[char] = ++result[char] || 1
    }
}
    return result;
}
console.log(charCount('hello isaac'))