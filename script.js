const menu_btn = document.getElementById("hamburger-menu");
const close_btn = document.getElementById("close-icon");

menu_btn.addEventListener("click", () => {
  document.getElementById("mobile-nav-overlay").style.right = "0";
});
close_btn.addEventListener("click", () => {
  document.getElementById("mobile-nav-overlay").style.right = "100%";
});
