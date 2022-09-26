let LibroA = "Libro A"
let precioLibroA = "100"
let stockLibroA = 5

let LibroB = "Libro B"
let precioLibroB = "150"
let stockLibroB = 6

let LibroC = "Libro C"
let precioLibroC = "75"
let stockLibroC = 8



let precioTotal = 0


alert("Estos son nuestros productos: \n - Libro A\n - Libro B\n - Libro C")


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
        let cantidadLibroA= prompt("ingrese que cantidad de " + LibroA + " desea comprar:")
        calculoStock(cantidadLibroA, stockLibroA, precioLibroA)
        
    }
    else if(libroCompra == 'Libro B'){
        let cantidadLibroB = prompt("ingrese que cantidad de " + LibroB + " desea comprar:")
        calculoStock(cantidadLibroB, stockLibroB, precioLibroB)
        
    }
    else if(libroCompra == 'Libro C'){
        let cantidadLibroC = prompt("ingrese que cantidad de " + LibroC + " desea comprar:")
        calculoStock(cantidadLibroC, stockLibroC, precioLibroC)
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

