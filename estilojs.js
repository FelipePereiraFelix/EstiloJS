function mudar(){
var corpo = document.getElementsByTagName("body")[0];
var arrayElements = corpo.getElementsByTagName("p");
console.log(arrayElements);

var lista = corpo.getElementsByTagName("ul");


var lin2 = lista[1].getElementsByTagName("li");
var p1 = lin2[0];
p1.style.color = "red";

var lin3 = lista[2].getElementsByTagName("li");
var p2 = lin3[1];
p2.style.color = "green";
p2.style.border = "3px green solid";

var lin4 = lista[3].getElementsByTagName("li");
var p3 = lin4[3];
p3.style.background = "aqua";

var lin1 = lista[0].getElementsByTagName("li");
var p4 = lin1[0];
p4.style.background = "aqua";
p4.style.border = "3px pink solid";

var lin25 = lista[4].getElementsByTagName("li");
var p5 = lin25[1];
p5.style.background = "blue";
p5.style.border = "4px pink solid";


}