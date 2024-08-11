function splitBill(dishes, numberOfPeople) {
    if (numberOfPeople <= 0) {
        console.log("Number of people must be greater than zero.");
        return;
    }
    
    let totalBill = dishes.reduce((sum, dishCost) => sum + dishCost, 0);
    
    let billPerPerson = totalBill / numberOfPeople;
    
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

let dishes = [1200, 1500, 800, 500]; 
let numberOfPeople = 4; 

let billDetails = splitBill(dishes, numberOfPeople);

console.log(`Total bill: Rs. ${billDetails.totalBill}`);
console.log(`Each person pays: Rs. ${billDetails.billPerPerson.toFixed(2)}`);
