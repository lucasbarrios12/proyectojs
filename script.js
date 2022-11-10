function Producto(nombre, id, precio, stock, cat, img, cant) {
    this.nombre = nombre;
    this.id = id;
    this.precio = precio;
    this.stock = stock;
    this.cat = cat;
    this.img = img;
    this.cant = cant
    this.actualizarStock = function(cantidad){
        this.stock -= cantidad
    }
}

let libroA = new Producto("Martial Peak", 1, 100, 10, "manhua", "../images/martial-peak.jpg", 1)
let libroB = new Producto("One piece", 2, 150, 6, "manga", "../images/one-piece.jpg", 1)  
let libroC = new Producto("Against the gods", 3, 90, 10, "manhua", "../images/against-the-gods.jpg", 1)
let libroD = new Producto("Apotheosis", 4, 150, 10, "manhua", "../images/apotheosis.jpg", 1)
let libroE = new Producto("Como ganar amigos e influir sobre las personas", 5, 95, 10, "libro", "../images/como-ganar-amigos-e-influir-sobre-las-personas.jpg", 1)
let libroF = new Producto("Harry Potter y la piedra filosofal", 6, 150, 80, "libro", "../images/harry-potter-y-la-piedra-filosofal.jpg", 1)
let libroG = new Producto("Jujutsu Kaisen vol 1", 7, 100, 10, "manga", "../images/jujutsu-kaisen-vol-1.jpg", 1)
let libroH = new Producto("Naruto vol 1", 8, 150, 10, "manga", "../images/naruto-vol-1.jpg", 1)
let libroI = new Producto("El señor de los anillos", 9, 75, 10, "libro", "../images/el-señor-de-los-anillos.jpg", 1)
let libroJ = new Producto("La Cabaña", 10, 125, 10, "libro", "../images/la-cabaña.jpg", 1)



let listaLibros = [libroA, libroB,  libroC, libroD, libroE, libroF, libroG, libroH, libroI, libroJ]

let listaStock = listaLibros.filter((libro) => libro.stock > 0)

let listaNombres = listaStock.map ((libro) => libro.nombre)


let catalogo = document.getElementById("catalogo")

let carrito = []
const vaciarCarrito = document.getElementById("vaciarCarrito")
const precioTotal = document.getElementById("precioTotal")

document.addEventListener('DOMContentLoaded', () => {
    const carritoContenedor = document.querySelector('#carritoContenedor')
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    mostrarCarrito()
})

vaciarCarrito.addEventListener('click', () => {
    carrito.length = []
    mostrarCarrito()
})


function render(lista) {
    catalogo.innerHTML = ""

    for(const prod of lista) {

        const {nombre, id, precio, stock, img, cant} = prod;
        let card = document.createElement("div")
    
        card.className = "card"
    
        card.innerHTML  = `<img class="main-tienda-imagen" src="${prod.img}" alt="">
        <h4 class="main-tienda-titulo">${prod.nombre}</h4>
        <p>$${prod.precio}</p>
        <button onclick="addprod(${id})" class="boton-carrito">Agregar al carrito</button>`
    
        catalogo.append(card)
    }
    
}
render(listaStock)

let filtrarCategorias = ''

let categorias = document.getElementById("cat-search")

categorias.addEventListener("change", ()=>{filtrarCategorias = categorias.value})

let flitroActual = listaNombres.filter((libro)=>libro.cat == categorias)

let botonFiltro =  document.getElementById("boton")
botonFiltro.addEventListener("click", filtrado)

function filtrado(){
    let filtradoActual = listaLibros.filter((libro)=>libro.cat == filtrarCategorias)
    filtradoActual.length == 0 && alert("Esa categoria no existe")

    render(filtradoActual)
}

let botonTodos = document.getElementById("boton-all")

botonTodos.addEventListener("click", ()=>{render(listaStock)})

function addprod(id){
    
    const existe = carrito.some(prod => prod.id === id)

    if(existe){
        const prod = carrito.map(prod => {
            if(prod.id === id){
                prod.cant++
            }
        })
    }

    else {
        const item = listaStock.find((prod) =>prod.id === id)
        carrito.push(item)
    }

    Toastify({
        text: "Agregaste correctamente el producto al carrito",
        className: "info",
        style: {
          background: "linear-gradient(to right, #081f0d, #10411b)",
        }
      }).showToast();
   
    mostrarCarrito()
};


const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body');

    modalBody.innerHTML = ''
    carrito.forEach((lista=> {
        const {nombre, id, precio, stock, img, cant} = lista;
        modalBody.innerHTML += `
            <div class="modal-contenedor">

                <img class="main-tienda-imagen img-carrito" src="${img}" alt="">

                <div class="posicionamiento">
                <h4>${nombre}</h4>
                <p>$${precio}</p>
                <p>Cantidad: ${cant}</p>
                <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar Producto</button>
                </div>

            </div>`;
     
    }))


    if (carrito.length === 0) {
        modalBody.innerHTML = `
        <p class="text-center text-primary">Aún no agregaste nada al carrito!</p>`
    }

    carritoContenedor.textContent = carrito.length

    if (precioTotal) {
        precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cant * prod.precio, 0);
    }

    saveStorage()

}

function eliminarProducto(id){
    const libroId = id
    carrito = carrito.filter((libro) => libro.id !== libroId)
    mostrarCarrito()
}
function saveStorage(){

    localStorage.setItem("carrito", JSON.stringify(carrito))

}
