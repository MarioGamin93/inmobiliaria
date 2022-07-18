//! Array con objeto donde estan todas las casas
let casas = [
    {
        nombre: 'Casa de lujo en el Bosque',
        descripcion: 'Una casa muy elegante donde puedes disfrutar un gran bosque para sentir la libertad y tranquidad.',
        src: 'assets/img/casa-01.jpg',
        cuartos: 4,
        metros: 230,
    },
    {
        nombre: 'Casa de lujo con piscina',
        descripcion: 'Una casa de luja que tiene un patio grande y una piscina para disfrutarla.',
        src: 'assets/img/casa-02.webp',
        cuartos: 3,
        metros: 200
    },
    {
        nombre: 'Casa pequeña con piscina',
        descripcion: 'Una casa muy bonita para vivir y a un precio extraordinario.',
        src: 'assets/img/casa-03.jpg',
        cuartos: 2,
        metros: 120
    },
    {
        nombre: 'Casa tropical',
        descripcion: 'Una casa preciosa que tiene un estilo trapical y una buena opcion para vivir en ella.',
        src: 'assets/img/casa-04.jpg',
        cuartos: 2,
        metros: 170
    },
    {
        nombre: 'Casa con una gran piscina',
        descripcion: 'Una gran casa con una estupenda piscina para vivir en ella.',
        src: 'assets/img/casa-05.jpg',
        cuartos: 3,
        metros: 210
    },
    {
        nombre: 'Casa con un gran patio',
        descripcion: 'Una casa prefecta para vivr en un hermoso lugar, tambien tiene un patio precioso.',
        src: 'assets/img/casa-06.webp',
        cuartos: 2,
        metros: 150
    },
    {
        nombre: 'Casa familar de lujo',
        descripcion: 'Una estupenda casa si quieres vivir con tu familia o si tienes planes para tener una familia.',
        src: 'assets/img/casa-07.jpeg',
        cuartos: 4,
        metros: 220
    },
    {
        nombre: 'Casa pequeña de madera',
        descripcion: 'Una casa con un estilo clasico de madera a un gran precio y un lugar muy tranquilo para vivir.',
        src: 'assets/img/casa-08.jpg',
        cuartos: 3,
        metros: 180
    }
];

//* Modificando la variable casas para usar un metodo sort y ordenar las casas
casas = casas.sort(ordenarCasas)

//! Constantes de llamada al DOM 
const formulario = document.getElementById('form');
const totalDeCasas = document.getElementById('card');
const textoTotal = document.getElementById('text');
const desde = document.getElementById('metros1');
const hasta = document.getElementById('metros2');
const cuarto = document.getElementById('cuartos');

//* Funcion para mostrar las casas en pantalla
function casasAgregadas(casa){
        totalDeCasas.innerHTML += 
    `<div class="card">
        <img src="${casa.src}" class="card__img">
        <div class="card__container">
        <h2 class="card__title">${casa.nombre}</h2>
        <div class="card__span">
        <span>Cuartos: ${casa.cuartos}</span>
        <span>Metros: ${casa.metros}</span>
        </div>
        <p class="card__text">${casa.descripcion}</p>
        </div>
        <button class="card__button">Ver más</button>
    </div>
    `
    return totalDeCasas.innerHTML
};

//* Funcion para recorrer el array de objetos
function PoblarCasas(casas){
    totalDeCasas.innerHTML = [];
    for(let casa of casas){
        totalDeCasas.innerHTML = casasAgregadas(casa)
    } 
}

//* Funcion para ordenar las casas de menor a mayor
function ordenarCasas( a, b ) {
    if ( a.metros < b.metros ){
        return -1;
        }
        if ( a.metros > b.metros ){
        return 1;
        }
        return 0;
}

//* Funcion para mostrar una alerta 
function faltanCampos(){
    if(desde.value == 0 || hasta.value == 0 || cuarto.value == 0){
        alert('Faltan campos por llenar')
        return true
    }
    return false
}

//* Funcion con un ciclo for of, dentro una condicion para mostrar solo las casas indicadas y tambien un texto con la cantidad
function condicionCasas(){
let contador = 0
   totalDeCasas.innerHTML = [];
for(let casa of casas){
    if(desde.value <= casa.metros && hasta.value >= casa.metros && cuarto.value == casa.cuartos){
        contador += 1
        totalDeCasas.innerHTML = casasAgregadas(casa)
    }
}
    textoTotal.textContent = `Total: ${contador}` 
}

//? Funcion de llamada
PoblarCasas(casas)

//? texto en la pantalla mostrando el total de casas
textoTotal.textContent = `Total: ${casas.length}`



//? Evento donde ocurre el resultado 
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    if(!faltanCampos()){
        condicionCasas()
    }
    console.log('Campos enviados')
});

