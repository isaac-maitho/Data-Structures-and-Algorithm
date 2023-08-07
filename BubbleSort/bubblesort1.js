function bubbleSort(arr){
    let noSwap;
    for (let i = arr.length; i>0; i--){
        noSwap = true;
        for(let j=0; j<i-1; j++){
            if(arr[j]> arr[j+1]){
                var swap = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = swap
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

// With a new way of swapping

function bubbleSort(arr){
    const swap = (arr, idx1, idx2) =>{
        [arr[idx1], idx2] = [arr[idx2, idx1]]
    }
    for (let i = arr.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            if(arr[j]> arr[j+1]){
                swap (arr, j, j+1)
            }
        }
    }
    return arr;
}
