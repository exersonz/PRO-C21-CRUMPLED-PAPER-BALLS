
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var basket_left;
var basket_right;
var up;
var right;
var left;

function setup() 
{
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;

	up = createImg("up_arrow.png");
	up.position(65,20);
	up.size(50,50);
	
	right = createImg("right_arrow.png");
	right.position(110,25);
	right.size(50,50);

	left = createImg("left_arrow.png");
	left.position(20,20);
	left.size(50,60);

	var ball_options=
	{
		restitution:0.75
	}

	//Create the Bodies Here
	ball = Bodies.circle(200,200,20,ball_options);
	fill("white");
	ball.radius = 20;
	World.add(world,ball);

	ground = new Ground(400,490,800,20);
	left_wall = new Ground(10,250,20,500);
	right_wall = new Ground(790,250,20,500);
	top_wall = new Ground(400,10,800,20);

	basket_left = new Ground(500,430,10,100);
	basket_right = new Ground(650,430,10,100);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() 
{
  background("lightyellow");
  ellipse(ball.position.x,ball.position.y,ball.radius);
  ground.show();
  basket_right.show();
  basket_left.show();
  left_wall.show();
  right_wall.show();
  top_wall.show();
  Engine.update(engine);
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.03});
	}

	if(keyCode === LEFT_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.03,y:0});
	}

	if(keyCode === RIGHT_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0});
	}
}



