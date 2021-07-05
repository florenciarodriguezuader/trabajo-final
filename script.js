$("#Contacto") .click(function irAContacto (evento){
evento.preventDefault();
let elemento= document.getElementById ("contacto2");
elemento.scrollIntoView();
});

$("#Inicio").click(function irAInicio(evento){
evento.preventDefault();
let elemento = document.getElementById ("Inicio2");
elemento.scrollIntoView ();
});

$("#SobreMi") .click (function irASobreMi (evento){
evento.preventDefault ();
let elemento= document.getElementById ("SobreMi2");
elemento.scrollIntoView();
});

$("#email") .click (function Redireccionar () {
window.open ("https://mail.google.com/mail/u/0/#inbox");
});
   
$("#git") .click (function Redireccionar (){
window.open ("https://github.com/florenciarodriguezuader");
});
   
$("#linkedin") .click (function Redireccionar (){
window.open ("https://www.linkedin.com/in/florencia-rodriguez-435b781a4/");
});
