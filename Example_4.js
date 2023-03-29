//write a function call sumZero which accepts a sorted array of integers
// The function should find the pair where the sum is zero
//Return an array that includes both values that sum to zero or undefined if a pair does not exist

//Easy solution O(n^2)

function sumZero(arr){
    for(i=0; i<=arr.length; i++){
        for(j=i+1; j<=arr.length; j++){
            if(arr[1] + arr[j] ===0){
                return [arr[i],arr[j]]
            }
        }
    }
}