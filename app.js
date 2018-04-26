var cat = {
  img : "https://i.imgflip.com/kqy15.jpg",
  name : "Mr. Snibbly",
  mood : ["happy", "bitey", "shanky"],
  tolerance : 3,
  pets : 0,
  moodIndex : 0
}

function drawCat() {
  var template = `
    <div class="col">
        <div class="card">
          <img id="cat-pic" src="${cat.img}" alt="">
          <div class="card-body">
            <h4>name: ${cat.name}</h4>
            <h4>happiness: ${cat.mood[cat.moodIndex]}</h4>
            <button onclick="petCat()">Pet</button>
          </div>
        </div>
      </div>
    `
    document.getElementById('cat').innerHTML = template
}

//petCat
  //increase pets by 1
  //check if pets is > than tolerance
    //change mood index to 1
    //drawCat
  

//catNip
  //reset pets to 0
  //reset mood index

function petCat(){
  cat.pets++
  if (cat.pets==cat.tolerance){
    cat.moodIndex++
    drawCat()
  }
  if (cat.pets==cat.tolerance*2){
    cat.moodIndex++
    drawCat()
    document.getElementById("cat-pic").hidden=true
  }
  
}





drawCat()