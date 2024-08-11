const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
};

let cart = [
    { unitPrice: 100, quantity: 2 }, 
    { unitPrice: 200, quantity: 1 }, 
    { unitPrice: 50, quantity: 4 }   
];

let totalPrice = calculateTotalPrice(cart);

console.log(`The total order price is Rs. ${totalPrice}`);
