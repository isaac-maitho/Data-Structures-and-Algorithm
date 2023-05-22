function fibonacciSeries(number){
    series =[]
    if(number ===1){
        series.push(0)
    }else if(number >=2){
        series.push(0,1)

        for(i=2; i<number; i++){
            const term = series[i-1] + series[i-2]
            series.push(term)
        }
    }
    return series
}

const number = parseInt(prompt('Enter the number of terms'))

console.log('Fibonacci series:')
const series = fibonacciSeries(number)
series.forEach(term => console.log(term))