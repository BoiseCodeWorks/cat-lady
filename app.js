var cat = {
  img : "https://img.etsystatic.com/il/37657c/637638639/il_fullxfull.637638639_32sw.jpg?version=0",
  name : "Mr. Snibbly",
  mood : ["happy", "bitey", "shanky"],
  tolerance : 3,
  pets : 0,
  moodIndex : 0
}

function drawCat() {
  var template = ''
  
    template += `
    <div class="col">
        <div class="card">
          <img src="${cat.img}" alt="">
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
drawCat()