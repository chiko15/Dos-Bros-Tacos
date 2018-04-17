window.onload = function(){
    var currentGame;
    var canStart = true;

  

var Avatar = function(){
    this.x = 650;
    this.y = 490;
    this.height = 100;
    this.width = 100;
    this.img = 'images/hungry-emoji1.png';


}

Avatar.prototype.drawAvatar = function(){
    var theImage = new Image();
    theImage.src = this.img;
    var that = this;
    theImage.onload = function(){
        ctx.drawImage(theImage, that.x, that.y, that.width, that.height);
        // console.log(that.x, that.y, this.width, this.height)
    }
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

    currentGame.obstacles.forEach(function(theObstacle){
        if((futureX >= theObstacle.x && futureX <= theObstacle.x + theObstacle.width) && (futureY >= theObstacle.y && futureY <= theObstacle.y + theObstacle.height)){
          canIMove = false;
        }
        
      });
      return canIMove;
};

var Obstacle = function(x, y, width, height){
    this.x = x; 
    this.y = y;
    this.width = width;
    this.height = height;
  
  }
  
  Obstacle.prototype.draw = function(){
    ctx.fillRect(this.x, this.y, this.width, this.height); 
  }
  
  
  
  
  
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
          var board = {
            score: 0,
            frames: 0,
          }
        


        // var leftWall = new Obstacle(0, 0, 1, 700);
        // var rightWall = new Obstacle(1400, 0, 1, 700);
        // currentGame.obstacles.push(leftWall, rightWall);
        // currentGame.obstacles.forEach(function(oneObstacle){
        //   oneObstacle.draw();
        // })
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

    function updateCanvas(){
      ctx.clearRect(0, 0, 1400, 600);
      
      currentGame.avatar.drawAvatar();
      
      currentGame.frames++;

      if(currentGame.frames % 60 === 1){
        tacoX = Math.floor(Math.random() * 1200);
        tacoWidth = 60;
        tacoHeight = 60;
        currentGame.obstacles.push(new Component(tacoWidth, tacoHeight, tacoX, 0));
      }
      for(var i = 0; i < currentGame.obstacles.length; i++){
        currentGame.obstacles[i].y += 10;
        currentGame.obstacles[i].update();
        
        if(taco)
    }
  }
};



























