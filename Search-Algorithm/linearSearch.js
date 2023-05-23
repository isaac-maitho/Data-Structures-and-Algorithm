//takes up two values an array and checks the index of the value in the arr if val is not there it returns -1
//time complexity O(n)
function linearSearch(arr, val){
    for(let i =0; i<arr.length; i++){
        if (arr[i] === val) return i;
    }
    return -1;
}