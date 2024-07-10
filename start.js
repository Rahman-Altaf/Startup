function sumEvenNumbers(start, end) {
    let sum = 0;
    
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    
    return sum;
}
const start = 1;
const end = 10;
const result = sumEvenNumbers(start, end);

console.log(`The sum of even numbers between ${start} and ${end} is: ${result}`);