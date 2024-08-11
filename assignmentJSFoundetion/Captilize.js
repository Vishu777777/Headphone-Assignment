function capitalizeName(name) {
   
    let capitalized = (name[0] === name[0].toLowerCase()) 
        ? name[0].toUpperCase() + name.slice(1) 
        : name;

    return capitalized;
}

let userName = prompt("Enter your name:");
let modifiedName = capitalizeName(userName);

// Display the modified name
console.log(`Your name is: ${modifiedName}`);
