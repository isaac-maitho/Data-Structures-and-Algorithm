//sorting an array from smallest to the largest
//Time complexity of O(n)^2

// function selectionSort (arr){
//     for(var i=0; i<arr.length; i++){
//         let lowest = i;
//         for(var j = i+1; j<arr.length; j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest){
//             var swap = arr[i]
//             arr[i] = arr[lowest]
//             arr[lowest] = swap
//         }
       
//     } 
//     return arr
// }
// selectionSort([10,15,9,45,29])

//swapping using the ES15 feature

function selectionSort(arr){
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

    for(var i = 0; i<arr.length; i++){
        let lowest = i;
        for(var j = i+1; j<arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if( i !== lowest) swap( arr, i, lowest )
    }
return arr
}

selectionSort([1,2,10,9,4])