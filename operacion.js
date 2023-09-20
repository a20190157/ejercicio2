alert("Bienvenido a la pagina de JavaScript");
var nom = prompt("Ingresa tu nombre y apellido");

var res1 = prompt("¿Cómo se llama al primer día de la Primavera?\n A: Primer Día de la Primavera\n B: Equinoccio de Primavera\n C: Equinoccio de Invierno");

if(res1=="B"){
res1 = 25;
}else{
    res1 = 0;
}
var res2 = prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?\n A: 6 meses de luz diurna ininterrumpida\n B: 6 meses de oscuridad inimterrumpida\n C: 6 meses de alternancia de luz y oscuridad");

if(res2=="A"){
    res2 = 25;
}else{
    res2 = 0;
} 
var res3 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte?\n A: Setiembre\n B: Junio\n C. Marzo");

if(res3=="C"){
    res3 = 25;
}else{
    res3 = 0;
} 
var res4 = prompt("¿Qué es la Fiesta de la Primavera en China?\n A: La Navidad\n B: El Año Nuevo\n C. Fiestas Patrias de China");

if(res4=="B"){
    res4 = 25;
}else{
    res4 = 0;
} 
var total = res1 + res2 + res3 +res4;

document.write("<h1>Cuestionario</h1>");
document.write("<h2>Estos fueron tus resultados</h2>");
document.write("Estudiante: " + nom + "<br>");
document.write("obtuviste " + total + " % <br>");

if(total<=25){
    document.write("lo siento, no lo lograste");
}else{
    document.write("Felicitaciones conoces muchos de la fiesta de la primavera");
}
