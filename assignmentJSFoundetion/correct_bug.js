function correctQuantities(cart) {
    
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2;
    }

    return cart;
}

let cart = [2, 5, 1, 8, 3]; 
let correctedCart = correctQuantities(cart);

console.log("Corrected Cart Quantities:", correctedCart);
