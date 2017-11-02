function clock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(clock, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}
function hello() {
document.getElementById('hello').innerHTML =
    "Hello" + ", " + localStorage.name;
  window.setTimeout(hallo,3000);
}
function hallo() {
document.getElementById('hello').innerHTML =
    "Hallo" + ", " + localStorage.name;
  window.setTimeout(czesc,3000);
}
function czesc() {
document.getElementById('hello').innerHTML =
    "Cześć" + ", " + localStorage.name;
  window.setTimeout(halla,3000);
}
function halla() {
document.getElementById('hello').innerHTML =
    "Hallå" + ", " + localStorage.name;
  window.setTimeout(koni,3000);
}
function koni() {
document.getElementById('hello').innerHTML =
    "こんにちは" + ", " + localStorage.name;
  window.setTimeout(nihao,3000);
}
function nihao() {
document.getElementById('hello').innerHTML =
    "你好" + ", " + localStorage.name;
  window.setTimeout(merhaba,3000);
}
function merhaba() {
document.getElementById('hello').innerHTML =
    "Merhaba" + ", " + localStorage.name;
  window.setTimeout(marhabaan,3000);
}
function marhabaan() {
document.getElementById('hello').innerHTML =
    "مرحبا" + ", " + localStorage.name;
  window.setTimeout(bonjour,3000);
}
function bonjour() {
document.getElementById('hello').innerHTML =
    "Bonjour" + ", " + localStorage.name;
  window.setTimeout(zdravo,3000);
}
function zdravo() {
document.getElementById('hello').innerHTML =
    "Zdravo" + ", " + localStorage.name;
  window.setTimeout(hodi,3000);
}
function hodi() {
document.getElementById('hello').innerHTML =
    "Hodi" + ", " + localStorage.name;
  window.setTimeout(hola,3000);
}
function hola() {
document.getElementById('hello').innerHTML =
    "¡Hola" + ", " + localStorage.name;
  window.setTimeout(perz,3000);
}
function perz() {
document.getElementById('hello').innerHTML =
    "سلام" + ", " + localStorage.name;
  window.setTimeout(hello,3000);
}
document.addEventListener('DOMContentLoaded', function() {
  clock(), hello();
    document.getElementById("openbtn").addEventListener('click', function() {
	   document.getElementById("settings").style.width = "300px";
	   document.getElementById("closebtn").style.width = "100%";
    });
    document.getElementById("closebtn").addEventListener('click', function() {
	     document.getElementById("settings").style.width = "0";
	     document.getElementById("closebtn").style.width = "0";
    });
});
