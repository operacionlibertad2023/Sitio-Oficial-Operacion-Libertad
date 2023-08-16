window.onscroll = function(){
    
    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("foto_personaje");
    var elemento2 = document.getElementById("foto_guardia");

    elemento1.style.bottom = posicion * 0.5 + "px";
    elemento2.style.top = posicion * 0.2 + "px";
}

function animar(){
    document.getElementById("myModal").classList.add ("abajo");  
}
function cerrarModal(){
    document.getElementById("myModal").classList.remove ("abajo");
}
function openNav(){
    document.getElementById("mobile-menu").classList.add ("func");    
    document.body.classList.add('func'); // Agregar la clase al cuerpo
}
function closeNav(){
    document.getElementById("mobile-menu").classList.remove ("func");
    document.body.classList.remove('func'); // Remover la clase del cuerpo
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function openOverlay() {
}

function closeOverlay() {
}