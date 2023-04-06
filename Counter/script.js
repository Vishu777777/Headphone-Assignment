const decrement = document.getElementById("decrement")
const increment = document.getElementById("increment")
const reset = document.getElementById("reset")
const displayValue = document.getElementById("value")

var cVal = 0;

const plus = () => {
   cVal++;
   value.innerText = cVal;
}

const subtract = () => {
   cVal--;
   value.innerText = cVal;
}

const rest = () => {
   cVal = 0;
   value.innerText = cVal;
}

value.innerText = cVal;
decrement.addEventListener("click",subtract);
increment.addEventListener("click", plus);
reset.addEventListener("click",rest);
