  
  var canvas = document.createElement("canvas");
  ctx = canvas.getContext("2d");
  canvas.setAttribute("width", "900");
  canvas.setAttribute("height", "504");
  var width = canvas.width;
  var height = canvas.height;
  
  var bg = new Background(ctx, "images/bg.png", 1);
  var p1 = new Player (ctx, "images/flappy.png")
  
  function startGame() {
    document.querySelector("button").style = "display: none";
    document.querySelector("body").append(canvas);
  }
  
  document.getElementById("start-button").onclick = function() {
    startGame();
    let intervalId = setInterval(() => {
      update();
      drawEverything();
    }, 1000/60)
  };

  function update() {
    bg.update();
    p1.update()
    if (this.y == this.ctx.canvas.height -this.height) {
        clearInterval(intervalId);
    }
  } 
  
  function drawEverything() {
    ctx.clearRect(0,0, width, height);
    bg.draw();
    p1.draw();
  }

document.onkeydown = (e) => {
  e.preventDefault()
  if (e.keyCode == 32) {
    p1.click = true;
    p1.yCache = p1.y;
  }
}


