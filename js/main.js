const darkModeBtn = document.getElementById("theme-btn");
const switcher = document.querySelector(".switcher");
const html = document.querySelector("html");


darkModeBtn.addEventListener("click", function () {

  document.body.classList.toggle("light-theme");
  html.classList.toggle("light");
  switcher.classList.toggle("active");
  darkModeBtn.classList.toggle("toggle");
  
})
