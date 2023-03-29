//Given two strings, write a function to determine if the 2nd int is an anagram of the 1st
//Anagram(iceman, cinema)

//using frequencycounter method
function anagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    const obj ={}

    for(i=0; i<=str1.length; i++){
        let letter = str1[i]
        //if letter exists, increment, otherwise set it to one
        obj[letter] ? obj[letter] +=1 : obj[letter] = 1
    }

    for(i=0; i<str2.length; i++){
        let letter = str2[i]
        //if the letter is not there then it is not an anagram
        if(!obj[letter]){
            return false
        }else{
            str2[i] -=1
        }
    }
    return true
}