
function grille(){
let scene = document.querySelector("#scene");


for (let i = 0; i<10; i++ ) {
    
   let  ligne = document.createElement("div");
   scene.appendChild(ligne);
   ligne.classList.add("ligne");
   
   for(let j=0; j<10; j++){
          let cellule = document.createElement("div");
             cellule.classList.add("cell");
            ligne.appendChild(cellule);
   }
  
}

}
    
    window.addEventListener("DOMContentLoaded", (event) => {
         grille();

    
  });
  
