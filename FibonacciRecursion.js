function fibonacciSeries(number){
    if(number ===1){
        return[0]
    }else if(number === 2){
        return[0,1]
    }else{
        const series = fibonacciSeries(number -1)
        series.push(series[number-2] + series[number-3])
        return series;
    }
}

const number = parseInt(prompt('Enter the number of terms'))

console.log('Fibonacci series:')
const series = fibonacciSeries(number)
series.forEach(term => console.log(term))