window.addEventListener('load',melumatlariGetir)
const cardlarDivi = document.querySelector(".cardlar-divi row")
async function melumatlariGetir(){
const unvan = "gameapi.json"
try{
const istek= await fetch(unvan) 
// console.log(istek);
const cavab = await istek.json()
console.log(cavab);
}
catch(error){
console.log(error);
}


for(let i=0; i<cavab.length; i++){
cardlarDivi.innerHTML +=` <div class="card col-12 col-md-6 col-lg-3">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> `
}
}


