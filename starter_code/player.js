class Player {
  constructor(ctx, url) {
    this.ctx = ctx;
    this.x = 100;
    this.y = 300;
    this.speedX = 0.2
    this.speedY = -2;
    this.gravitiy = 0.1
    this.img = new Image()
    this.img.src = url;
    this.height = 60;
    this.width = this.height*this.img.width/this.img.height
    this.click = false;
    this.repeats = 0;
    this.yCache = this.y;
    
    this.y + this.img.height;
  }

 


  update() {
    if (this.click){
      this.speedY += this.gravitiy; 
      this.y += this.speedY;
      // if (this.y - this.yCache > 50) {
      //   this.click = false;
      // }


      
    // this.repeats += this.repeatsY;
    // this.speedY += this.gravitiy; 
    // this.y -= this.speedY;
    // this.x += this.speedX;
    // }
    // if (this.repeats > 15){
    // this.speedY += this.gravitiy; 
    //   this.y += this.speedY;
    //   this.x += this.speedX*0.8;
    //   this.click = false;
    //   this.repeatsY++;
    } 
  }
  
  newPos() {

  }
  draw() {
    this.ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
  }
}