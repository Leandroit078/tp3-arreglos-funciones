
let ciudades = []

    do{
        let ciudad = prompt("Introduce una ciudad");
    if(ciudades == ""){
        ciudades.push(parseInt(ciudad));
}
    else{
        ciudades = [ciudades + "-" + ciudad];
}
}while(confirm("Desea seguir?"));
    document.write(ciudades);

    document.write(`<ul>`);
    for (let indice = 0; indice < ciudades.length; indice++) {
        document.write(`<li>${ciudades[indice]}</li>`)
    }
    document.write(`</ul>`);



