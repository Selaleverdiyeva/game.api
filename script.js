const cardlarDivi = document.querySelector(".cardlar-divi")
 window.addEventListener('load',melumatlariGetir)



async function melumatlariGetir(){
const unvan = "gameapi.json"
try{
const istek= await fetch(unvan) 
// console.log(istek);
const cavab = await istek.json()
console.log(cavab);
for(let i=0; i<cavab.length; i++){
  cardlarDivi.innerHTML +=` <div class="card col-12 col-md-6 col-lg-3">
  <img src="${cavab[i].thumbnail}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${cavab[i].title}</h5>
    <p class="card-text">${cavab[i].short_description}</p>
    <a href="${cavab[i].game_url}" class="btn btn-primary game-btn">Oyuna daxil olun</a>
  </div>
  </div> `
  }
}
catch(error){
console.log(error);
}



}


