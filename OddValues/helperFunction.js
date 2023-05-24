//takes up an array and returns the odd numbers in the array
function oddValues(arr){
    let result = []
    function helper(input){
     if(input.length === 0){
        return;
    }
     if(input[0] % 2 !== 0){
        return result.push(input[0])
    }
    helper(input.slice(1))
  }
  helper(arr)
  return result
}