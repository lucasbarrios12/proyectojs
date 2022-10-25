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
let libroC = new Producto("El señor de los anillos", 3, 75, 8, "libro", "../images/el-señor-de-los-anillos.jpg", 1)
let libroD = new Producto("Libro D", 4, 90, 0)

let listaLibros = [libroA, libroB,  libroC, libroD]

let listaStock = listaLibros.filter((libro) => libro.stock > 0)

let listaNombres = listaStock.map ((libro) => libro.nombre)

let precioTotal = 0

let catalogo = document.getElementById("catalogo")

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    const carritoContenedor = document.querySelector('#carritoContenedor')
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
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
        <button onclick="addprod(${id})" class="btn btn-danger">Agregar al carrito</button>`
    
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

function addprod(id) {
    const item = listaStock.find((prod) =>prod.id === id)
    carrito.push(item)
    mostrarCarrito()
}

const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body');

    modalBody.innerHTML = ''
    carrito.forEach((prod)=> {
        const {nombre, id, precio, stock, img, cant} = prod;
        modalBody.innerHTML += `
            <div class="modal-contenedor">

                <img class="main-tienda-imagen img-carrito" src="${prod.img}" alt="">

                <div class="posicionamiento">
                <h4>${prod.nombre}</h4>
                <p>$${prod.precio}</p>
                <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar Producto</button>
                </div>

            </div>`;
    })

    carritoContenedor.textContent = carrito.length

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
