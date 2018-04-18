window.onload = function(){
    var currentGame;
    var canStart = true;
    var score = 0;
    
    function scoreBoard(){
      this.canvas = document.getElementById('theCanvas');
      this.ctx = myCanvas.getContext('2d');
      this.ctx.fillStyle="black";
      this.ctx.font = "50px Arial";
       this.ctx.fillText("Score: " + currentGame.score, 1150, 50);
    }
    
    var board = {score: 0, frames: 0}

var Avatar = function(){
    this.x = 650;
    this.y = 490;
    this.height = 100;
    this.width = 100;
    this.img = 'images/hungry-emoji1.png';


  }
  var theImage = new Image();

Avatar.prototype.drawAvatar = function(){
    // theImage.src = this.img;
    var that = this;
    // theImage.onload = function(){
        ctx.drawImage(theImage, that.x, that.y, that.width, that.height);
        // console.log(that.x, that.y, this.width, this.height)
    // }
    theImage.src = 'images/hungry-emoji1.png';

    // console.log("image is: ", theImage)
}

Avatar.prototype.move = function(magicalNumber){
    ctx.clearRect(this.x, this.y, this.width, this.height);
    switch(magicalNumber){
        case 37:
        if(this.canMove(this.x-55, this.y)){
            this.x -=55;
        }
          break;
        case 39:
        if(this.canMove(this.x+55 + this.width, this.y)){
            this.x += 55;
        }
          break;
          default:
    }
    this.drawAvatar();
}

Avatar.prototype.canMove = function(futureX, futureY){
    var canIMove = true;

    if(futureX <= 0 || futureX >= 1400){
      canIMove = false;
    }
      return canIMove;
};
  
  var myCanvas = document.getElementById('theCanvas');
    var ctx = myCanvas.getContext('2d');
    document.getElementById("start-button").onclick = function() {
      startGame();
    };
  
    function startGame() {
      if(canStart){
        currentGame = new Game();
        var theAvatar = new Avatar();
        currentGame.avatar = theAvatar;
        currentGame.avatar.drawAvatar();
        setInterval(updateCanvas, 50);
        scoreBoard();
  
      };
      canStart = false;
  
    }
    
    document.onkeydown  = function(event){
      var directionCode = event.which;
      currentGame.avatar.move(directionCode);
      if (event.which === 37 || event.which === 39){
        event.preventDefault();
      }
    };


    
    function Component(width, height, x, y){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 0;
      this.img = 'images/taco.png';

      this.update = function(){
        var theImage = new Image();
        theImage.src = this.img; 
        ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
      },
      this.newPosition = function(){
        this.x += this.speedX;
        this.y += this.speedY

      }
    }
    function checkCollision(obstacle){
        if((obstacle.y >= currentGame.avatar.y && obstacle.y <= currentGame.avatar.y + currentGame.avatar.height)&&(obstacle.x +obstacle.width>= currentGame.avatar.x &&obstacle.x <= currentGame.avatar.x+currentGame.avatar.width)){
          currentGame.score++;
          console.log(currentGame.score);
          return true;
          board.score ++;
        } 
        else if (obstacle.y >= 590){
          obstacle.splice(i,1);
        }
        
      
    }
    function updateCanvas(){
      ctx.clearRect(0, 0, 1400, 600);
      currentGame.avatar.drawAvatar();
      currentGame.frames++;
      scoreBoard();

      if(currentGame.frames % 45 === 1){
        tacoX = Math.floor(Math.random() * 1200);
        tacoWidth = 60;
        tacoHeight = 60;
        currentGame.obstacles.push(new Component(tacoWidth, tacoHeight, tacoX, 0));
      }
      for(var i = 0; i < currentGame.obstacles.length; i++){
        currentGame.obstacles[i].y += 10;
        currentGame.obstacles[i].update();
        if (checkCollision(currentGame.obstacles[i])){
        
          currentGame.obstacles.splice(i,1);
        }
        else if (currentGame.obstacles[i].y >= 590){
          currentGame.obstacles[i].splice(i,1);
        }
      }
  }
};


























