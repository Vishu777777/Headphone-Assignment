function calculateRentalCost(daysRented, carType) {
   
    const rentalCosts = {
        "Economy": 4500,  
        "Midsize": 15000, 
        "Luxury": 25000   
    };

    if (!(carType in rentalCosts)) {
        console.log("Invalid car type. Please choose 'Economy', 'Midsize', or 'Luxury'.");
        return;
    }
    let costPerDay = rentalCosts[carType];
    let totalCost = costPerDay * daysRented;

    return totalCost;
}

let daysRented = 5; 
let carType = "Luxury"; 

let totalRentalCost = calculateRentalCost(daysRented, carType);

console.log(`The total rental cost for a ${carType} car for ${daysRented} days is Rs. ${totalRentalCost}`);
