//Q.2 Write a function same which accepts two arrays. 
//The function should return true if every value in the array has its corresponding value squared in the 2nd array
//The frequency of values must be the same.

//solution

/*function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0; i<arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[1] **2)
        if(correctIndex === -1){
            return false
        }
        arr2.splice(correctIndex,1)
    }
    return true;
}
*/
//using frequency counter

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let freqCounter1 = {}
    let freqCounter2 = {}
    // Iterating through the array using the for...of method
    //Count the frequency of each element in arr1
    for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) +1
    }
    //Count the frequency of each element in arr2
    for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) +1
    }

    //Check if the squared values of arr1 elements exist in arr2 with same frequency using for ..in
    for (let key in freqCounter1){
        if(!(key **2 in freqCounter2)){
            return false
        }
        if(freqCounter2[key **2] !== freqCounter1[key]){
            return false
        }
    }
    console.log(freqCounter1, freqCounter2)
    return true
}
same([4,2,2], [4,4,16])
