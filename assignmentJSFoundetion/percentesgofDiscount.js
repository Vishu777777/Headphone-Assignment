const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0) {
        throw new Error("Original price must be greater than zero.");
    }
    

    let discountAmount = originalPrice - discountedPrice;
    let discountPercentage = (discountAmount / originalPrice) * 100;
    
    return discountPercentage.toFixed(2);
};


let originalPrice = 1000; 
let discountedPrice = 750;

let discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

console.log(`The discount percentage is ${discountPercentage}%`);
