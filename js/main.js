// const darkModeBtn = document.getElementById("theme-btn");
// const switcher = document.querySelector(".switcher");
// const html = document.querySelector("html");
// const cards = document.querySelectorAll(".card");
// const heading = document.querySelector(".heading");
// const paragraphs = document.querySelectorAll("main p");
// const socialHeaders = document.querySelectorAll(".social h2");
// const overviewTitle = document.querySelector(".overview h2");

// darkModeBtn.addEventListener("click", function () {

//   switcher.classList.toggle("active");
//   darkModeBtn.classList.toggle("toggle");
//   html.classList.toggle("light");
//   heading.classList.toggle("heading-light");
//   overviewTitle.classList.toggle("overview_light");

//   paragraphs.forEach(paragraph => {
//     paragraph.classList.toggle("light-para");
//   });

//   socialHeaders.forEach(header => {
//     header.classList.toggle("heading-light");
//   });

//   cards.forEach(card => {
//     card.classList.toggle("card-light");
   
//   });
// });

const darkModeBtn = document.getElementById("theme-btn");
const switcher = document.querySelector(".switcher");
const html = document.querySelector("html");


darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  html.classList.toggle("light");
  switcher.classList.toggle("active");
  darkModeBtn.classList.toggle("toggle");
})
