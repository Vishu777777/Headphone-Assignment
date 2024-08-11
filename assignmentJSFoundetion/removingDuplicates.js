
function removeDuplicates(cart) {
    let uniqueCart = [...new Set(cart)];
    
    return uniqueCart;
}


let customerCart = ["apple", "banana", "apple", "orange", "banana", "grape"];
let newCart = removeDuplicates(customerCart);

console.log("Original Cart:", customerCart);
console.log("Cart after removing duplicates:", newCart);
