function oddValues(arr){
    let newArr = []

    if(arr.length === 0){
        return newArr;
    }
    if(arr[0] % 2 !==0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(oddValues(arr.splice(1)))
    return newArr;

}