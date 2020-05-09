/*const sunMoon = document.getAttribute("fa-moon-o");*/
const toggleNight = document.querySelector(".toggleNight");
const bdy = document.querySelector("body");
toggleNight.addEventListener("click", () => {
  toggleNight.classList.toggle("active");
  bdy.classList.toggle("night");

  /*if (sunMoon === "fa-moon-o") {
    sunMoon.classList.remove("fa-moon-o");
    sunMoon.classList.add("fa-sun-o");
  } else {
    sunMoon.classList.remove("fa-sun-o");
    sunMoon.classList.add("fa-moon-o");
  }*/
});

function myfunc(div) {
  let className = div.getAttribute("class");
  console.log(className);
  if (className == "fa fa-moon-o") {
    div.className = "fa fa-sun-o";
  } else {
    div.className = "fa fa-moon-o";
  }
}

const nav_btn = document.querySelector(".nav_btn"); // Responsive Navigation Button
const sidebar = document.querySelector(".sidebar");
const heading = document.querySelector(".heading");
const contBody = document.querySelector(".containerBody");
// Navigation Button Click Event
nav_btn.addEventListener("click", () => {
  nav_btn.classList.toggle(`toggle`);
  contBody.classList.toggle("menuAct");
  heading.classList.toggle("headingAct");
  sidebar.classList.toggle("navBtnActive"); //nav Button Animation
});

//Active Menu
/*const menus = document.querySelectorAll(".sidebar-items a");
const act = document.querySelector(".sidebar-items .btn");
for (eachMenu of menus) {
  eachMenu.addEventListener("click", () => {
    .classList.toggle("activeMenu");
  });
}*/

const btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("activeMenu");
    current[0].className = current[0].className.replace(" activeMenu", "");
    this.className += " activeMenu";
  });
}

//Change Image on Dark Mode

let logo_id = "b";
function imgCh() {
  //Change Logo
  const logo = document.getElementById("logo");
  const bell = document.getElementById("bell");
  const progress = document.getElementById("progress");
  const notification = document.getElementById("notification");
  const team = document.getElementById("team");

  if (logo_id == "b") {
    logo.src = "./images/logo_dark.png";
    bell.src = "./images/bell_dark.png";
    progress.src = "./images/progress_dark.png";
    notification.src = "./images/notification_dark.png";
    team.src = "./images/team_dark.png";
    logo_id = "w";
  } else {
    logo.src = "./images/logo_day.png";
    bell.src = "./images/bell_day.png";
    progress.src = "./images/progress.png";
    notification.src = "./images/notification.png";
    team.src = "./images/team.png";
    logo_id = "b";
  }
}
