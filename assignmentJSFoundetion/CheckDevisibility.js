function checkDivisibility(numbers) {
    for (let i = 0; i < numbers.length; i++) {
     
        if (numbers[i] % 2 === 0) {
            continue;
        }
        
        if (numbers[i] % 3 === 0) {
            console.log(numbers[i]);
        }
    }
}

let numbersArray = [1, 3, 6, 9, 12, 15, 18, 21, 25, 30];
checkDivisibility(numbersArray);
