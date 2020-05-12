function setup() {
  createCanvas(400,400);
  box = createSprite(40, 250, 50, 330 );
  box.shapeColor=("white");
  box2 = createSprite(40,70,60,60);
  box2.shapeColor=("white");
  box3 = createSprite(160,280,40,240);
  box3.shapeColor=("white");
  box4 = createSprite(160,170,60,20);
  box4.shapeColor=("white");
  box5 = createSprite(300,290,50,320);
  box5.shapeColor=("white");
  box6 = createSprite(300,130,70,70);
  box6.shapeColor=("white"); 
}

function draw() {
  background(0,0,0);
  text("King Udayan's fort",130,80 );
  drawSprites();
}