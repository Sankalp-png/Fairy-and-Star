var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	starImage1 = loadImage("images/starImage.png")
	bgImg = loadImage("images/starNight.png");
	music = loadSound("sound/JoyMusic.mp3");

	//load animation for fairy here;
	fairyAnimation = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy = createSprite(250,500,20,20);
    fairy.addAnimation("flying",fairyAnimation);
    fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	star1 = createSprite(80,30);
	star1.addImage(starImg)
	star1.scale = 0.02

	star2 = createSprite(550,30);
	star2.addImage(starImg);
	star2.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if( star.y > 470 && star.position.y > 470) {
	  Matter.Body.setStatic(starBody,true)
	  music.stop();
	  
  }


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === LEFT_ARROW) {
		fairy.position.x = fairy.position.x - 30; 
	}

	if (keyCode === RIGHT_ARROW) {
		fairy.position.x = fairy.position.x + 30; 
		music.play();
	}

}
