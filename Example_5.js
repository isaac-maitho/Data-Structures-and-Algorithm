//Implement a function called countUniqueValues, which accepts a sorted array
//and counts the unique values in the array, there can be negative Nos but the arr must be sorted

function countUniqueValues(arr){
    if(arr.length === 0) return 0
    let i=0;
    for(let j=1; j<arr.length; j++){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1;

}
(countUniqueValues([1,2,2,3,4,5,7,9,9]))
