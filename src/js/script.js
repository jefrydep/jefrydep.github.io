document.getElementById("nav__icon").addEventListener("click",showMenu);
document.getElementById("back__nav").addEventListener("click",closeMenu);
// document.getElementById("back__nav").addEventListener("click",closeMenu);
nav = document.getElementById("nav__movil")
backgroundMenu = document.getElementById("back__nav");
function showMenu(){
nav.style.left= "0px"
backgroundMenu.style.display = "block"


}
function closeMenu(){
 nav.style.left= "-300px";
 backgroundMenu.style.display= "none";

}