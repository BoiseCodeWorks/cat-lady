// var cat = {
//   img: "https://i.imgflip.com/kqy15.jpg",
//   name: "Mr. Snibbly",
//   mood: ["happy", "bitey", "shanky"],
//   tolerance: 3,
//   pets: 0,
//   moodIndex: 0
// };

function Cat(name, img, tolerance){
  this.name = name
  this.img = img
  this.tolerance = tolerance
  this.mood = ["happy", "bitey", "ran-away"]
  this.pets = 0
  this.moodIndex = 0
}


var mrSnibbley = new Cat('Snibbley', 'https://i.imgflip.com/kqy15.jpg', 3)
var Garfield = new Cat('Garfield', 'https://i.imgflip.com/kqy15.jpg', 8)

var cats = {
  Snibbley: mrSnibbley,
  Garfield: Garfield
}

function drawCat(cat) {
  var template = `
    <div class="col">
        <div class="card">
          <img id="cat-pic" src="${cat.img}" alt="">
          <div class="card-body">
            <h4>name: ${cat.name}</h4>
            <h4>happiness: ${cat.mood[cat.moodIndex]}</h4>
            <button onclick="petCat('${cat.name}')">Pet: ${cat.pets}</button>
            <button onclick="catNip('${cat.name}')">CatNip</button>
          </div>
        </div>
      </div>
    `
  document.getElementById("cat").innerHTML = template;
}

function catNip(catName) {
  cats[catName].pets = 0;
  cats[catName].moodIndex = 0;
  drawCat(cats[catName]);
}

function petCat(catName) {
  var testCat = cats[catName]
  debugger
  cats[catName].pets++;
  toleranceCheck(cats[catName]);
  drawCat(cats[catName]);
}

function toleranceCheck(catObject){
  if (catObject.pets == catObject.tolerance) {
    catObject.moodIndex++;
  }
  if (catObject.pets == catObject.tolerance * 2) {
    catObject.moodIndex++;
    document.getElementById("cat-pic").hidden = true;
  }
}



drawCat(Garfield);


