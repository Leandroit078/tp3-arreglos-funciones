let ciudades2 = [];

do {
  let Ciudades = prompt("Introduce una ciudad");
  ciudades2.push (Ciudades)
} while (confirm("Desea seguir?"));

document.write('<br>'+ciudades2);
//mostrar longuitud de arreglo
console.log (ciudades2.length)
//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
console.log (ciudades2[0])
console.log (ciudades2[3])
console.log (ciudades2[ciudades2.length-1])
//Añade en última posición la ciudad de París.
ciudades2.push("Paris")
document.write('<br>'+ciudades2);
//Escribe por pantalla el elemento que ocupa la segunda posición.
document.write ('<br>'+ciudades2[1])
//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades2[1] = 'Barcelona';
document.write('<br>'+ciudades2);
