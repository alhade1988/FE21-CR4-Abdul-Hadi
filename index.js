let movisjson = JSON.parse(movis);


for (let val of movisjson) {
    document.getElementById("result").innerHTML += `
    <div class="row-cols-1 row-cols-md-2 row-cols-lg-3">
    <div class="card" style="width: 19rem;">
    <img src="${val.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${val.movieName}</h5>
      <p class="card-text ">${val.description}.</p>
      <a  class="btn btn-primary likes">likes<samp class="result">${val.likes}</samp></a>
    </div>
  </div>
  </div>`;



}




let btns = document.getElementsByClassName("likes");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        movisjson[i].likes++;

        document.getElementsByClassName("result")[i].innerHTML = movisjson[i].likes;


    })
}


let btns1 = document.getElementById("sort");
btns1.addEventListener("click", function() {
    movisjson.sort((a, b) => b.likes - a.likes);

    for (let val of movisjson) {
        document.getElementById("result").innerHTML += `
          <div class="row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div class="card" style="width: 19rem;">
          <img src="${val.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${val.movieName}</h5>
            <p class="card-text ">${val.description}.</p>
            <a  class="btn btn-primary likes">likes<samp class="result">${val.likes}</samp></a>
          </div>
        </div>
        </div>`;


    }

    console.table(movisjson)
})