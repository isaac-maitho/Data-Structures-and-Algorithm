// program to generate fibonacci series up to n terms


/*const number = parseInt(prompt('Enter the number of terms'))
let n1=0, n2=1, nextTerm;

for(let i=0; i<=number; i++){
    console.log(n1)
    nextTerm = n1 + n2;
    n1=n2;
    n2 = nextTerm
}*/

// program to generate fibonacci series up to a certain number

const number = parseInt(prompt('Enter a positive number'))
let n1=0, n2=1, nextTerm;

console.log('Fibonacci series')
console.log(n1)
console.log(n2)

nextTerm = n1 + n2;
while (nextTerm <= number) {
    console.log(nextTerm)

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1+n2
}