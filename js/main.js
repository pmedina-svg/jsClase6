const nombreAstronauta = prompt("🚀 NASA - Centro de control \n\n Bienvenido al simulador de viajes espaciales.\n Cual es tu nombre?");
alert("Bienvenid@ " + nombreAstronauta + "!\n" + "Preparate para tu mision espacial.");

// Array literal con 12 objetos
const viajesEspaciales = [
    { destino: "Luna", distancia: 384400, velocidad: 40000, categoria: "Satelite", mensaje: "No saltes tanto, porque en la Luna pesas 6 veces menos que en la Tierra." },
    { destino: "Marte", distancia: 225000000, velocidad: 60000, categoria: "Planeta", mensaje: "¿Sabías que en Marte un día dura casi lo mismo que en la Tierra? Exactamente 24 horas y 39 minutos." },
    { destino: "Venus", distancia: 41000000, velocidad: 40000, categoria: "Planeta", mensaje: "Bienvenido a Venus, ponte bloqueador porque es el planeta más caliente del Sistema Solar." },
    { destino: "Jupiter", distancia: 628000000, velocidad: 50000, categoria: "Planeta", mensaje: "Júpiter es tan grande que cabrían más de mil Tierras dentro de él." },
    { destino: "Saturno", distancia: 1280000000, velocidad: 80000, categoria: "Planeta", mensaje: "Saturno es famoso por sus impresionantes anillos formados principalmente por hielo y roca." },
    { destino: "Europa", distancia: 628000000, velocidad: 80000, categoria: "Satelite", mensaje: "Europa es una de las lunas de Júpiter y los científicos creen que podría tener un océano bajo su superficie, llevaste caña de pescar?" },
    { destino: "Titan", distancia: 1280000000, velocidad: 80000, categoria: "Satelite", mensaje: "Titán tiene una atmósfera muy densa y lagos de metano líquido en su superficie, no te tires al agua."},
    { destino: "Pluton", distancia: 5900000000, velocidad: 100000, categoria: "Planeta Enano", mensaje: "Plutón fue considerado un planeta hasta 2006, cuando pasó a ser clasificado como planeta enano o como Satélite, ya no recuerdo bien." },
    { destino: "Sol", distancia: 149600000, velocidad: 120000, categoria: "Estrella", mensaje: "¡Cuidado! no debiste ir a allí, te confiaste demasiado" },
    { destino: "Ganimedes", distancia: 628000000, velocidad: 80000, categoria: "Satelite", mensaje: "¿Sabías que Ganimedes es la luna más grande del Sistema Solar? Incluso es más grande que Mercurio." },
    { destino: "Ceres", distancia: 414000000, velocidad: 50000, categoria: "Planeta Enano", mensaje: "Cuidado con aterrizar! Ceres tiene una montaña de unos 4.000 metros de altura y está cubierto de cráteres." },
    { destino: "Eris", distancia: 10100000000, velocidad: 100000, categoria: "Planeta Enano", mensaje: "Eris está tan lejos del Sol que su temperatura puede bajar hasta unos -230 °C. Espero que hayas llevado un buen abrigo." },
]

console.log(viajesEspaciales);

// funcion para convertir el calculo de horas a años - dias - horas
function convertirDuracion(horasTotales){
    const horasAnio = 365 * 24;
    const anios = parseInt(horasTotales / horasAnio);
    const horasRestantes = horasTotales % horasAnio;
    const dias = parseInt(horasRestantes / 24);
    const horas = horasRestantes % 24;

    return anios + " años, " + dias + " días y " + horas + " horas";
}

let mision;

function ejecutarMision(viajeSeleccionado){
let accion;
do{

    accion = parseInt(prompt("Has seleccionado: " + viajeSeleccionado.destino + "\nDistancia: " + viajeSeleccionado.distancia + " km" + "\nVelocidad de viaje: " + viajeSeleccionado.velocidad + "\n\n Qué quieres hacer?" + "\n1. Lanzar misión" + "\n2. Cambiar velocidad" + "\n3. Calcular duración de viaje" + "\n4. Cancelar misión"  ));

    switch(accion){

        case 1:{
            const duracionViaje = viajeSeleccionado.distancia / viajeSeleccionado.velocidad;
            console.log("Se procede el despegue a: " + viajeSeleccionado.destino);
            alert("🚀 Misión completada! \nHas llegado a " + viajeSeleccionado.destino + "\nDuración del viaje: " + convertirDuracion(duracionViaje) + ".\nNuestros amigos te dan la bienvenida 👽\n\n" + viajeSeleccionado.mensaje);
            const regresar = prompt("¿Quieres volver a la Tierra?\n\n1. Si\n2. No").toLowerCase();
            console.log("Regresar: " + regresar);
            if(regresar === 1 || regresar === "si"){
                alert("Astronauta " + nombreAstronauta + " regresando al planeta Tierra..");
                console.log("Astronauta " + nombreAstronauta + " decidió volver a la Tierra.");
            }
            else if(regresar === 2 || regresar === "no"){
                alert("Gracias por haber participado en la misión. \nTe deseamos una vida prospera en tu nuevo hogar.");
                console.log("Astronauta " + nombreAstronauta + " decidió quedarse en " + viajeSeleccionado.destino + ".");
                mision = 5;
            }
            break;
            }

            case 2:{
                const nuevaVelocidad = parseInt(prompt("🚀 A que velocidad quieres viajar ?"));
                viajeSeleccionado.velocidad = nuevaVelocidad;
                console.log("🚀 Nueva velocidad configurada: " + viajeSeleccionado.velocidad + " km/h");
                console.log(viajeSeleccionado);
                break;
            }

            case 3:{
                const duracionViaje = viajeSeleccionado.distancia / viajeSeleccionado.velocidad;
                alert("La duración del viaje al destino: " + viajeSeleccionado.destino + " tiene una duración de " + convertirDuracion(duracionViaje) + ".");
                console.log("Duración del viaje: " + convertirDuracion(duracionViaje) + ".");
                break;
            }

            case 4:
                alert("No te preocupes, no todos están listos para volar.");
                console.log("No viaja.");
                break;

            default:
                alert("Opción no válida");
                console.log(nombreAstronauta + " escribio: " + accion + ". opción no valida.");
                break;
            }

    }while(accion !==1 && accion !==4);
}

do{
    mision = parseInt(prompt("🚀 NASA - Centro de control \n\n¿Que quieres hacer? \n1. Elegir destino por categoría \n2. Buscar un destino \n3. Ver todos los destinos \n4. Viajar por todo el espacio \n\n5. Salir"));

    console.log("Selecionó: " + mision)

    switch (mision){
        case 1:
            let eligeCategoria;
            let existeCategoria;
            let volverDestino = false;
            let viajeSeleccionado;

            do{
                eligeCategoria = prompt("¿Que categoría quieres explorar? \n- Planeta \n- Satelite \n- Planeta Enano \n- Estrella \n\n- Volver").toLowerCase();
                console.log("Eligio categoría: " + eligeCategoria);
                if(eligeCategoria === "volver"){
                    break;
                }
                volverDestino = false;

                existeCategoria = viajesEspaciales.some(viaje => viaje.categoria.toLowerCase() === eligeCategoria);

                if(existeCategoria){
                    const destinosFiltrados = viajesEspaciales.filter(viaje => viaje.categoria.toLowerCase() === eligeCategoria);
                    const nombreDestinos = destinosFiltrados.map(viaje => viaje.destino);                                       

                    do{

                        const eligeDestino = prompt("Donde quieres viajar? \n\n" + nombreDestinos.join("\n") + "\n\n- Volver").toLowerCase();
                        console.log("Eligio destino: " + eligeDestino);

                        if(eligeDestino === "volver"){
                            volverDestino = true;
                        }

                        else {
                            viajeSeleccionado = destinosFiltrados.find(viaje => viaje.destino.toLowerCase() === eligeDestino);        
                            console.log(viajeSeleccionado); 
                            if(!viajeSeleccionado){
                                alert("Destino invalido");
                            }
                        }

                    }while(!viajeSeleccionado && !volverDestino);
                
                }
                    
                else{
                    alert("Destino no encontrado");
                }
            }while(!existeCategoria || volverDestino);

            if(viajeSeleccionado){
                ejecutarMision(viajeSeleccionado);
            }

            break;

        case 2:
            let eligeDestino;
            let destinoFiltrado;

            do{
                eligeDestino = prompt("¿Qué destino quieres buscar? \nEscribe 'volver' si quieres regresar al menú").toLowerCase();
    
                if(eligeDestino === "volver"){
                    break;
                }

                destinoFiltrado = viajesEspaciales.find(viaje => viaje.destino.toLowerCase() === eligeDestino);
    
                if(destinoFiltrado){
                    console.log(destinoFiltrado);
                    ejecutarMision(destinoFiltrado);
                }
                else{
                    console.log( eligeDestino + " destino no encontrado");
                    alert("Destino no encontrado");
                }

            }while(!destinoFiltrado);      

            break;

        case 3:
            const nombreDestinos = viajesEspaciales.map(viaje => viaje.destino);
            console.log("Destino: " + nombreDestinos);
            alert("Destinos disponibles: \n" + "- " + nombreDestinos.join("\n- "));
            break;

        case 4:
            const totalDistancia = viajesEspaciales.reduce((acc, viaje) => acc + viaje.distancia, 0);
            console.log("Distancia total: " + totalDistancia);
            alert("Distancia total del viaje espacial: " + totalDistancia + " km");
            break;

        case 5:
            break;

        default:
            alert("Opción no válida");
            console.log(nombreAstronauta + " escribio: " + mision + ". opción no valida.");
            break;

    };

}while (mision !== 5);