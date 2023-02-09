//your code here
const btn = document.getElementById("btn");
const num = document.getElementById("num");

btn.addEventListener("click", function() {
  const randomNum = Math.floor(Math.random() * 41) - 20;
  num.textContent = "Random Number: " + randomNum;
});


