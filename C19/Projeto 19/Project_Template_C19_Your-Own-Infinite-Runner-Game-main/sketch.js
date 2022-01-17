var backgroundImg, background_;
var naveImg, nave;
var meteoro, meteoro1, meteoro2;
var meteoroGroup;
var invisableGround, invisableGround1;
var pontuacao, fimJogo, fimJogoImg;

var FIM = 0;
var PLAY = 1;
var estadoJogo = PLAY;

function preload(){
backgroundImg = loadImage("fundo.jpg");
naveImg = loadImage("nave.png");
meteoro1 = loadImage("meteoro4.png");
meteoro2 = loadImage("meteoro3.png");
balaImg = loadImage("bala.png");
fimJogoImg = loadImage("gameOver.png");
}

function setup() {
    createCanvas(1100,800);
 
    background_ = createSprite(900,300,626,375);
    background_.addImage(backgroundImg);
    background_.scale = 3;
    

    nave = createSprite(100, 400, 50,50);
    nave.addImage(naveImg);
    nave.scale = 0.2;

    fimJogo = createSprite(550,400,50,50);
    fimJogo.addImage(fimJogoImg);

    meteoroGroup = new Group;
  

    invisableGround = createSprite(50,10,width*2,20);
    invisableGround1 = createSprite(50,790,width*2,20);
    invisableGround1.visible = false;
    invisableGround.visible = false;

    pontuacao = 0;

}

function draw() {
    background(rgb(79, 12, 156)); 

    pontuacao = pontuacao + Math.round(getFrameRate()/60);

    if(estadoJogo == PLAY){

        fimJogo.visible = false;
        nave.velocityX = -2;

        if(keyDown("space")){
            nave.x = nave.x + 4;
        }

        if(keyDown("UP_ARROW")){
            nave.y = nave.y - 3;
        }

        if(keyDown("DOWN_ARROW")){
            nave.y = nave.y + 3;
        }

        obstaculos();
    }
    

    if(nave.isTouching(meteoroGroup) || nave.x < 0 ||nave.isTouching(invisableGround) || nave.isTouching(invisableGround1)){
        nave.velocityX = 0;
        nave.velocityY = 0;

        meteoroGroup.setVelocityXEach(0);
        meteoroGroup.setVelocityYEach(0);

        nave.destroy();
        pontuacao = 0;

        fimJogo.visible = true;
        estadoJogo = FIM;
        
}
    

    
    drawSprites();
}

function obstaculos(){
    if (frameCount % 100 == 0){

        var posY = Math.round(random(100,750));
        meteoro = createSprite(1200,posY,20,20);
        meteoro.scale = 0.2;
        meteoro.velocityX = -2;
        meteoro.lifetime = 850;

        meteoro.velocityX = -(4 + pontuacao / 100);

        var aleatorio = Math.round(random(1,2));

        if(aleatorio == 1){
            meteoro.addImage(meteoro1);
        } else{
            meteoro.addImage(meteoro2);
        }

        meteoroGroup.add(meteoro);

    }
}



