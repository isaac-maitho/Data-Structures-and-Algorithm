//string searching algorithm that counts the number of occurrences of a substring (short) within a larger string (long). 
//It uses a nested loop to compare characters between the two strings.
function stringSearch(long, short){
    let count = 0;
    for(let i =0; i<long.length; i++){
        for(let j =0; j<short.length; j++){
            if(short[i] !==long[i+j]){
                break;
            }
            if(j === short.length -1){
                count ++;
            }
        }
    }
    return count;
}