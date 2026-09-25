//const nombreAstronauta = prompt("🚀 NASA - Centro de control \n\n Bienvenido al simulador de viajes espaciales.\n Cuál es tu nombre?");
//alert("Bienvenid@ " + nombreAstronauta + "!\n" + "Prepárate para tu misión espacial.");


// Array literal con 12 objetos
const viajesEspaciales = [
    { id: 1, destino: "Luna", distancia: 384400, velocidad: 40000, categoria: "Satélite" },
    { id: 2, destino: "Marte", distancia: 225000000, velocidad: 60000, categoria: "Planeta" },
    { id: 3, destino: "Venus", distancia: 41000000, velocidad: 40000, categoria: "Planeta" },
    { id: 4, destino: "Mercurio", distancia: 77000000, velocidad: 50000, categoria: "Planeta" },
    { id: 5, destino: "Jupiter", distancia: 628000000, velocidad: 50000, categoria: "Planeta" },
    { id: 6, destino: "Saturno", distancia: 1280000000, velocidad: 80000, categoria: "Planeta" },
    { id: 7, destino: "Urano", distancia: 2720000000, velocidad: 80000, categoria: "Planeta" },
    { id: 8, destino: "Neptuno", distancia: 4350000000, velocidad: 100000, categoria: "Planeta" },
    { id: 9, destino: "Europa", distancia: 628000000, velocidad: 80000, categoria: "Satélite" },
    { id: 10, destino: "Titán", distancia: 1280000000, velocidad: 80000, categoria: "Satélite" },
    { id: 11, destino: "Plutón", distancia: 5900000000, velocidad: 100000, categoria: "Planeta Enano" },
    { id: 12, destino: "Sol", distancia: 149600000, velocidad: 120000, categoria: "Estrella" },
]

console.log(viajesEspaciales);


let mision;

do{
    mision = parseInt(prompt("🚀 NASA - Centro de control \n\n¿Qué quieres hacer? \n1. Elegir destino por categoría \n2. Buscar un destino \n3. ver todos los destinos \n4. Viajar por todo el espacio \n\n5. Salir"));

    switch (mision){
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        default:
            break;
    };

}while (mision !== 5);