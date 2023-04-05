//write a function call sumZero which accepts a sorted array of integers
// The function should find the pair where the sum is zero
//Return an array that includes both values that sum to zero or undefined if a pair does not exist

//Easy solution O(n^2)

/*function sumZero(arr){
    for(i=0; i<=arr.length; i++){
        for(j=i+1; j<=arr.length; j++){
            if(arr[1] + arr[j] ===0){
                return [arr[i],arr[j]]
            }
        }
    }
}*/

//using another approach(multiple pointers)
//time complexity O(N) space complexity O(1)
 function sumZero(arr){
    let left =0;
    let right= arr.length-1;

    while(left<right){
        let sum = arr[left] +arr[right]
        if(sum ===0){
            return [arr[left], arr[right]]
        }else if(sum>0){
            right--;
        }else{
            left++;
        }
    }
 }