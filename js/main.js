const sublink = document.getElementById("sublink");
const submenu = document.getElementById("submenu");
const menu = document.getElementById("menu-icon");
const menu_close = document.getElementById("popup_close");
const menu_mobile = document.getElementById("popup_menu");
const call_btn = document.querySelector(".popup_menu_btn");

sublink.onclick = function () {
  submenu.style.setProperty("display", "flex");
};
submenu.onclick = function () {
  submenu.style.setProperty("display", "none");
};
menu.onclick = function () {
  menu_mobile.style.setProperty("display", "block");
};
menu_close.onclick = function () {
  menu_mobile.style.setProperty("display", "none");
};
call_btn.onclick = function () {
  menu_mobile.style.setProperty("display", "none");
};
