// A function takes two values and uses the binary search method to look for the index of the val element
//The array must be sorted
//Time complexity O(log n)
function binarySearch(arr, val){
    let start =0;
    let end = arr.length -1;
    var middle = Math.floor((start + end) / 2)

    while(arr[middle !== val] && start<=end){
        if(val < arr[middle]){
            end = middle - 1;
        }else{
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === val ? middle : -1
}