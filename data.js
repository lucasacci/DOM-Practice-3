let seccionPadre = document.querySelector(".container");

let formulario = document.querySelector("#seccion");



let n = [];
let i = 0;

function crearTarea(e){
  e.preventDefault();


    let texto = document.getElementById('tarea');   
    let card = document.createElement('div');
    let x = i++;
    card.className = 'card my-3 mx-3 col-12 col-lg-3 col-md-4 justify-content-center'
  


    card.innerHTML = `
    <div class="card-body" >
      <h5 class="card-title" id="${x}">${texto.value}</h5>
      <h6 class="card-subtitle mb-2 text-muted"></h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
      <a href="x" class="card-link">Another link</a>
      <a href="#" class="card-link">Another link</a>
      <button  id="#" class="btn btn-primary" onclick="eliminar(${x})">Eliminar</button>
    </div>
  `


    n.push(x);

    formulario.appendChild(card);

  }
  
  function eliminar(x){
     
 let pos ;

    for (let i = 0; i < n.length; i++) {
      
      if(x  == n[i]){
        pos = i;
        break;
      }
      
    }
  
   n.splice(pos , 1);

  formulario.removeChild(formulario.children[pos]);
    
}