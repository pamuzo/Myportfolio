function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

const year = new Date();
document.getElementById("footer").innerText = " © SAM " + year.getFullYear();
