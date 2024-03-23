// Suzdavame promenlivi
let myX, myY, plX=[], plY=[], brPl;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 0;
    brPl=10
    startX=0
    loseX=10000
    for(let p=0; p<brPl; p=p+1){
        plX[p]=randomInteger(700)
        plY[p]=randomInteger(500)
    }
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myY=myY+2
   // myX=mouseX
   if(isKeyPressed[37]){
    myX=myX-1
   }
   if(isKeyPressed[39]){
    myX=myX+1
   }
  /* plY=plY-1
   if(plY<0){
    plY=600
    plX=randomInteger(700)
   }*/
   for(let p=0; p<brPl; p=p+1){
    plY[p]=plY[p]-1
    if(plY[p]<0){
        plX[p]=randomInteger(700)
        plY[p]=600
    }
   }
   for(let p=0; p<brPl; p=p+1){
    if(areColliding(myX, myY, 98, 98, plX[p], plY[p], 120, 30)){
        myY=plY[p]-98
    }
   }
   if(isKeyPressed[32]){
    startX=100000
   }
   if(myY>610){
    loseX=0
   }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backGrass, 0, 0, 800, 600);
    drawImage(volcano, myX, myY, 98, 98);
    for(let p=0; p<brPl; p=p+1){
        drawImage(groundGrass, plX[p], plY[p], 120, 30)
    }
    drawImage(backSpikes, startX, 0, 800, 600)
    drawImage(back3D, loseX, 0, 800, 600)
    
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

