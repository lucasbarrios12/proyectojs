function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.actualizarStock = function(cantidad){
        this.stock -= cantidad
    }
}

let libroA = new Producto("Libro A", 100, 10)
let libroB = new Producto("Libro B", 150, 6)  
let libroC = new Producto("Libro C", 75, 8)
let libroD = new Producto("Libro D", 90, 0)

let listaLibros = [libroA, libroB,  libroC, libroD]

let listaStock = listaLibros.filter((libro) => libro.stock > 0)

let listaNombres = listaStock.map ((libro) => libro.nombre)

let precioTotal = 0


alert("Estos son nuestros productos: \n - " + listaNombres.join ("\n -"))


function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}



let cantidadCompra = parseInt(prompt("Que cantidad de libros distintos quiere comprar:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

    let libroCompra = prompt("Ingrese que producto quiere comprar: \n - Libro A\n - Libro B\n - Libro C")
    
    if(libroCompra == 'Libro A'){
        let cantidadLibroA= prompt("ingrese que cantidad de " + libroA.nombre + " desea comprar:")
        calculoStock(cantidadLibroA, libroA.stock, libroA.precio)
        libroA.actualizarStock(cantidadLibroA)
        
    }
    else if(libroCompra == 'Libro B'){
        let cantidadLibroB = prompt("ingrese que cantidad de " + libroB.nombre + " desea comprar:")
        calculoStock(cantidadLibroB, libroB.stock, libroB.precio)
        libroA.actualizarStock(cantidadLibroB)    
    }
    else if(libroCompra == 'Libro C'){
        let cantidadLibroC = prompt("ingrese que cantidad de " + libroC.nombre + " desea comprar:")
        calculoStock(cantidadLibroC, libroC.stock, libroC.precio)
        libroA.actualizarStock(cantidadLibroC)
    }
    else{
        alert("No contamos con ese Libro a la venta")
    }

} 

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}
else{
    alert("Gracias por su visita!")
}

