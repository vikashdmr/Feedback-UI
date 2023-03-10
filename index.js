const rtingEls = document.querySelectorAll(".emoji-image");

const btnEl = document.getElementById("btn");
const contenorEl = document.getElementById("contenor");
let selectedRating= "";

rtingEls.forEach((rtingEl) => {
    rtingEl.addEventListener("click", (event) => {
        removeactive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText
         event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    })
});
btnEl.addEventListener("click", ()=> {
    if(selectedRating !==""){
        contenorEl.innerHTML =  `
        <strong> thank you! </strong> 
         <br> 
         <br> 
         <strong>feedback: ${selectedRating}</strong>
         <p> we'll use your feedback to improve our customer support.</p>
        ` ;
}});
function removeactive(){
    rtingEls.forEach((rtingEl)=> {
        rtingEl.classList.remove("active");
    })
}