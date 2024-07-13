const btnAbrirPopup =
document.querySelector ("#btn-abrir-popup");
const btnCerrarPopup =
document.querySelector("#btn-guardar");
const popup = 
document.querySelector("#popup");

btnAbrirPopup.addEventListener("click",()=>{
   
    popup.showModal();
})

btnCerrarPopup.addEventListener("click",()=>{
    
    popup.close();
})