//select elements from html
const brownColor = document.querySelectorAll(".color");
const card = document.getElementById("card");
const color1 = document.getElementById('color-1');
const color2 = document.getElementById("color-2");
const color3 = document.getElementById("color-3");
const color4 = document.getElementById("color-4");
const img = document.querySelector('img');


// loop through the array/nodelist classes to change background color of card on click
// [...brownColor].forEach((col) => {
//   col.addEventListener("click", () => {
//     card.style.backgroundColor = col.style.backgroundColor;
//   });
// });
card.style.backgroundColor = "#fff";

//change image on click
color1.addEventListener('click', () => {
  img.src = "./assets/iphone__white.png"
})

color2.addEventListener('click', () => {
  img.src = "./assets/brown__iphone.png"
})

color3.addEventListener("click", () => {
  img.src = "./assets/white__phone.png";
});

color4.addEventListener("click", () => {
  img.src = "./assets/black__iphone.png";
});








