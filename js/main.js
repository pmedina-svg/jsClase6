//const nombreAstronauta = prompt("🚀 NASA - Centro de control \n\n Bienvenido al simulador de viajes espaciales.\n Cual es tu nombre?");
//alert("Bienvenid@ " + nombreAstronauta + "!\n" + "Preparate para tu mision espacial.");


// Array literal con 12 objetos
const viajesEspaciales = [
    { id: 1, destino: "Luna", distancia: 384400, velocidad: 40000, categoria: "Satelite" },
    { id: 2, destino: "Marte", distancia: 225000000, velocidad: 60000, categoria: "Planeta" },
    { id: 3, destino: "Venus", distancia: 41000000, velocidad: 40000, categoria: "Planeta" },
    { id: 4, destino: "Mercurio", distancia: 77000000, velocidad: 50000, categoria: "Planeta" },
    { id: 5, destino: "Jupiter", distancia: 628000000, velocidad: 50000, categoria: "Planeta" },
    { id: 6, destino: "Saturno", distancia: 1280000000, velocidad: 80000, categoria: "Planeta" },
    { id: 7, destino: "Urano", distancia: 2720000000, velocidad: 80000, categoria: "Planeta" },
    { id: 8, destino: "Neptuno", distancia: 4350000000, velocidad: 100000, categoria: "Planeta" },
    { id: 9, destino: "Europa", distancia: 628000000, velocidad: 80000, categoria: "Satelite" },
    { id: 10, destino: "Titan", distancia: 1280000000, velocidad: 80000, categoria: "Satelite" },
    { id: 11, destino: "Pluton", distancia: 5900000000, velocidad: 100000, categoria: "Planeta Enano" },
    { id: 12, destino: "Sol", distancia: 149600000, velocidad: 120000, categoria: "Estrella" },
]

console.log(viajesEspaciales);


let mision;

do{
    mision = parseInt(prompt("🚀 NASA - Centro de control \n\n¿Que quieres hacer? \n1. Elegir destino por categoría \n2. Buscar un destino \n3. Ver todos los destinos \n4. Viajar por todo el espacio \n\n5. Salir"));

    switch (mision){
        case 1:
            const eligeCategoria = prompt("¿Que categoría quieres explorar? \n- Planeta \n- Satelite \n- Planeta Enano \n- Estrella \n- Volver").toLowerCase();
            if(eligeCategoria === "volver"){}
            else{
                const destinosFiltrados = viajesEspaciales.filter(viaje => viaje.categoria.toLowerCase() === eligeCategoria);
                console.log(destinosFiltrados);
                const nombreDestinos = destinosFiltrados.map(viaje => viaje.destino);
                const eligeDestino = prompt("Donde quieres viajar? \n\n" + nombreDestinos.join("\n") + "\n\n- Volver").toLowerCase();
                if(eligeDestino === "volver"){}
                else{
                    const viajeSeleccionado = destinosFiltrados.find(viaje => viaje.destino.toLowerCase() === eligeDestino);
                    if(viajeSeleccionado){
                        console.log(viajeSeleccionado);
                    }
                    else{
                        alert("Destino no encontrado");
                    }
                }
            }
            break;
        case 2:
            const eligeDestino = prompt("¿Qué destino quieres buscar? \n\n- Volver").toLowerCase();

            if(eligeDestino === "volver"){}
            else{
                const destinoFiltrado = viajesEspaciales.find(viaje => viaje.destino.toLowerCase() === eligeDestino);
                console.log(destinoFiltrado);
            }

            break;
        case 3:
            const nombreDestinos = viajesEspaciales.map(viaje => viaje.destino);
            console.log("Destino: " + nombreDestinos);
            break;
        case 4:
            const totalDistancia = viajesEspaciales.reduce((acc, viaje) => acc + viaje.distancia, 0);
            console.log("Distancia total: " + totalDistancia);
            break;
        case 5:
            break;
        default:
            break;
    };

}while (mision !== 5);