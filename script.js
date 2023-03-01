var content_Home = document.getElementById("contanthome");
var content_About = document.getElementById("contantabout");
var content_Works = document.getElementById("contantworks");
// var content_Services = document.getElementById("contantservices");
var btn_home = document.getElementById("home");
var btn_about = document.getElementById("about");
var btn_works = document.getElementById("works");
// var btn_servicrs = document.getElementById("services");
function openAbout() {
  btn_home.style.background = "rgba(255,255,255,0.0)";
  btn_about.style.background = "rgba(255,255,255,0.1)";
  btn_works.style.background = "rgba(255,255,255,0.0)";
  // btn_servicrs.style.background = "rgba(255,255,255,0.0)";
  content_Home.style.display = "none";
  content_Works.style.display = "none";
  // content_Services.style.display = "none";
  content_About.style.display = "block";
}
function openHome() {
  btn_home.style.background = "rgba(255,255,255,0.1)";
  btn_about.style.background = "rgba(255,255,255,0.0)";
  btn_works.style.background = "rgba(255,255,255,0.0)";
  // btn_servicrs.style.background = "rgba(255,255,255,0.0)";
  content_Home.style.display = "block";
  content_Works.style.display = "none";
  // content_Services.style.display = "none";
  content_About.style.display = "none";
}
function openWorks() {
  btn_home.style.background = "rgba(255,255,255,0.0)";
  btn_about.style.background = "rgba(255,255,255,0.0)";
  btn_works.style.background = "rgba(255,255,255,0.1)";
  // btn_servicrs.style.background = "rgba(255,255,255,0.0)";
  content_Home.style.display = "none";
  content_Works.style.display = "block";
  // content_Services.style.display = "none";
  content_About.style.display = "none";
}
// function operServices() {
//   btn_home.style.background = "rgba(255,255,255,0.0)";
//   btn_about.style.background = "rgba(255,255,255,0.0)";
//   btn_works.style.background = "rgba(255,255,255,0.0)";
//   btn_servicrs.style.background = "rgba(255,255,255,0.1)";
//   content_Home.style.display = "none";
//   content_Works.style.display = "none";
//   content_Services.style.display = "block";
//   content_About.style.display = "none";
// }
window.onload = () => {
  btn_home.style.background = "rgba(255,255,255,0.1)";
  btn_about.style.background = "rgba(255,255,255,0.0)";
  btn_works.style.background = "rgba(255,255,255,0.0)";
  // btn_servicrs.style.background = "rgba(255,255,255,0.0)";
  content_Home.style.display = "block";
  content_Works.style.display = "none";
  // content_Services.style.display = "none";
  content_About.style.display = "none";
};



// Contact Menu
function activeContact() {
  document.querySelector(".contact").classList.add("active");
  document.querySelector(".main-width").classList.add("disable");
}
function deactiveContact() {
  document.querySelector(".contact").classList.remove("active");
  document.querySelector(".main-width").classList.remove("disable");
}
