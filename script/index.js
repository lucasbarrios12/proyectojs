const productosMasVendidos = [

    {
        nombre: "Martial Peak",
        imagen: "../images/martial-peak.jpg",
        precio: "1000"
    },

    {
        nombre: "Apotheosis",
        imagen: "../images/apotheosis.jpg",
        precio: "1200"
    },

    {
        nombre: "El señor de los anillos",
        imagen: "../images/el-señor-de-los-anillos.jpg",
        precio: "2000"
    },

    {
        nombre: "One piece",
        imagen: "../images/one-piece.jpg",
        precio: "1700"
    },
    
    {
        nombre: "Against the gods",
        imagen: "../images/against-the-gods.jpg",
        precio: "1000"
    },

    {
        nombre: "Como ganar amigos e influir sobre las personas",
        imagen: "../images/como-ganar-amigos-e-influir-sobre-las-personas.jpg",
        precio: "1300"
    },

]

let catalogo = document.getElementById("mainProductos")

catalogo.innerHTML = ""

productosMasVendidos.forEach((libros => {
    const {nombre, imagen, precio} = libros;
    let card = document.createElement("div")

    card.className = "main-card"

    card.innerHTML = `<img class="main-card-img" src="${libros.imagen}" alt="apotheosis">
    <h4 class="main-card-titulo">${libros.nombre}</h3>
    <p class="main-card-precio">Precio: $${libros.precio}</p>`

    catalogo.append(card)

    console.log(libros)
}))


// PRODUCTOS RECOMENDADOS

const productosRecomendados = [


    {
        nombre: "Harry Potter y la piedra filosofal",
        imagen: "../images/harry-potter-y-la-piedra-filosofal.jpg",
        precio: "3000"
    },

    {
        nombre: "Naruto",
        imagen: "../images/naruto-vol-1.jpg",
        precio: "1800"
    },
]

