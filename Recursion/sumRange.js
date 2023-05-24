//calculates the sum of numbers from 1 to a given input number num.
function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1)
}
sumRange()

//expected output 
//if num is 2 the output is 3