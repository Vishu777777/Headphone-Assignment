// Function to count the number of vowels in a name
function countVowels(name) {
    let vowelCount = 0;
    const vowels = "aeiouAEIOU"; 

   
    for (let i = 0; i < name.length; i++) {
      
        if (vowels.includes(name[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
} 


let str_ing = prompt("Enter your String:");
let numberOfVowels = countVowels(str_ing);

console.log(`Your name contains ${numberOfVowels} vowel(s).`);
