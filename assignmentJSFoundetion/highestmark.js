// Array containing the marks of five students
let marks = [78, 85, 62, 90, 88];

// Initialize the variable to store the highest marks
let highestMarks = marks[0];

for (let i = 1; i < marks.length; i++) {
   
    highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
}

console.log(`The highest marks scored by any student in the class is: ${highestMarks}`);
