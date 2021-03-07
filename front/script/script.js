//Selecting dom items
const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuPic = document.querySelector(".menu-pic");
const menuItems = document.querySelectorAll(".nav-item");
const themeBtn = document.querySelector(".theme-btn");
const body = document.body;

//MENU BUTTON
//Starting state of the menu
let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    btn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuPic.classList.add("show");
    menuItems.forEach((item) => item.classList.add("show"));

    showMenu = true;
  } else {
    btn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuPic.classList.remove("show");
    menuItems.forEach((item) => item.classList.remove("show"));

    showMenu = false;
  }
}

//COLOR THEME CHANGE BUTTON
//Starting state of the menu: if the value true the button is already pressed
var clickedBtn = () => {
  if (localStorage.getItem("theme") == "dark") {
    return true;
  } else {
    return false;
  }
};
//console.log(clickedBtn());

//Saving the button status to the local storage: if the button have't pressed yet by clicking it saves the dark theme to the local storage. If the button haven't pressed yet, but previously it was, then also change the light value to dark in the local storage and the button is pressed(true). In other case the status should be dark so it sets it to light. In the end running the changeTheme function.
function saveBtnStatus() {
  var date = new Date();
  date.setHours(date.getHours() + 1);
  if (!clickedBtn) {
    localStorage.setItem("theme", "dark");
    clickedBtn = true;
  } else if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
    clickedBtn = true;
  } else {
    localStorage.setItem("theme", "light");
    clickedBtn = false;
  }
  changeTheme();
}

//Color changing function: it checks from local storage what is the status, the page should be dark or light. It useful because without that if new page loads the color theme jumps back always to original (light). The function adds to- and removes class names from elements.
function changeTheme() {
  var status = localStorage.getItem("theme");
  if (status == "dark") {
    menuNav.classList.add("dark");
    menuPic.classList.add("dark");
    body.classList.add("dark");
  } else {
    menuNav.classList.remove("dark");
    menuPic.classList.remove("dark");
    body.classList.remove("dark");
  }
  //console.log(status);
}

//EVENT LISTENERS
//If new page loads changeTheme func running
document.addEventListener("DOMContentLoaded", changeTheme);

//Mnu btn
btn.addEventListener("click", toggleMenu);

//Color theme button
themeBtn.addEventListener("click", saveBtnStatus);

//Clear local storage after x time
themeBtn.addEventListener(
  "click",
  function () {
    setTimeout(function () {
      // localStorage.removeItem("ExpiresIn");
      localStorage.removeItem("theme");
    }, 1000 * 60 * 30);
  },
  { once: true }
);
