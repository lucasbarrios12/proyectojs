let catalogo = document.getElementById("recomendaciones")

fetch("../data.json")
.then((response) => response.json())
.then ((lista) => {

        catalogo.innerHTML = ""
    
        for(const prod of lista) {
    
            const {nombre, resumen} = prod;
            let card = document.createElement("div")
        
            card.className = "card-resumen"
        
            card.innerHTML  = `<img class="main-recomendaciones-imagen" src="${prod.img}" alt="">
            <div class="card-texto">
            <h4 class="main-recomendaciones-titulo">${prod.nombre}</h4>
            <p class="main-recomendaciones-resumen" >${prod.resumen}</p>
            </div>`
        
            catalogo.append(card)
        }
        
    })