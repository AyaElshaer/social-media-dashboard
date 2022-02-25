const theme_btn = document.getElementById("theme-btn");
const switcher = document.querySelector(".switcher");
const body = document.querySelector("body");
const cards = document.getElementsByClassName("card");
const heading = document.querySelector(".heading");
const paras = document.querySelectorAll("main p");
const headers_2 = document.querySelectorAll(".social h2");
const overview_h2 = document.querySelector(".overview h2");

theme_btn.addEventListener("click", function () {
  switcher.classList.toggle("active");
  theme_btn.classList.toggle("toggle");
  body.classList.toggle("light");
  heading.classList.toggle("heading-light");
  overview_h2.classList.toggle("overview_light");

  document.querySelector(".social-header p").style.fontWeight = "bold"

  for (let i = 0; i < paras.length; i++) {
    paras[i].classList.toggle("light-para");
  }

  for (let i = 0; i < headers_2.length; i++) {
    headers_2[i].classList.toggle("heading-light");
  }

  for (let i = 0; i <= cards.length; i++) {
    cards[i].classList.toggle("card-light");
  }
});
