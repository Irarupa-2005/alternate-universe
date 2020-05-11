var sun , star1, star2, star3, star4,back;
var sunImg,star1Img,star2Img,star3Img,star4Img;
var backgroundImg;
function preload(){
 backgroundImg = loadImage("sprites/space.png"); 
sunImg = loadImage("sprites/sun.png");
star1Img = loadImage("sprites/ear.png");
star2Img = loadImage("sprites/mer.png");
star3Img =  loadImage("sprites/mar.png");
star4Img  = loadImage("sprites/ven.png");

}

function setup() {
  createCanvas(800,1800);
  //back = createSprite(200,200);
  //back.addImage("backgroundImg",backgroundImg);


   sun =  createSprite(400, 400, 50, 50);
  sun.addImage("sun",sunImg);
   sun.scale= 0.2;
   sun.debug = true;
  
  star1 = createSprite(400, 80, 50, 50);
   star1.addImage(star1Img);
   star1.scale = 0.1;
  // star1.shapeColor = "white";
 star1.debug = true;

  star2 = createSprite(600, 600, 50, 50);
  star2.addImage("mer",star2Img);
  star2.scale = 0.2;
  star2.shapeColor = "blue";


  star3= createSprite(50, 400 ,50, 50);
  star3.addImage("mar",star3Img);
  star3.scale= 0.3;
  star3.shapeColor = "green";

  star4.addImage("ven",star4Img);
  star4.scale = 0.2;
  star4.shapeColor = "red";

  
}

function draw() {

  background("black");
   

   if(frameCount % 10===0){
    sun.scale = sun.scale+0.05;
  
  }
   
 
  if(sun.isTouching(star4)){
    star4.destroy();
  }
  
   if(sun.isTouching(star1)){
    star1.destroy();
  }
   if(sun.isTouching(star3)){
    star3.destroy();
  }
 
   if(sun.isTouching(star2)){
    star2.destroy();
  }
  
   
  drawSprites();
}
  

   




//console.log(star1);