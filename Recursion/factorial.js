function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1)
}
factorial()

//Expected output if num is maybe 3
//3*2*1 = 6