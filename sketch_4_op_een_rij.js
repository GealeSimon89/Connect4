let tellertje = 0;
let currentPlayer = "rood";


function setup() {
  createCanvas(840, 840);
  background(22, 54, 212);
  line(0, 120, 840, 120);
  line(120, 0, 120, 840);
  line(0, 240, 840, 240);
  line(240, 0, 240, 840);
  line(0, 360, 840, 360);
  line(360, 0, 360, 840);
  line(0, 480, 840, 480);
  line(480, 0, 480, 840);
  line(0, 600, 840, 600);
  line(600, 0, 600, 840);
  line(0, 720, 840, 720);
  line(720, 0, 720, 840);
}

function draw() {
  tellertje +=1;
 //console.log(tellertje);


  fill(239, 247, 8);
  //ellipse(60, (60+tellertje)%800, 60);
  //ellipse(780, (780+tellertje)%800, 60);
  //ellipse(300, (300+tellertje)%800, 60);
  //ellipse(540, (540+tellertje)%800, 60);

  fill(255, 0, 0);
  //ellipse(300, (300+tellertje)%800, 60);
  //ellipse(540, (540+tellertje)%800, 60);
  //ellipse(180, 180, 60);
  //ellipse(420, 420, 60);
  //ellipse(660, 660, 60);

  //console.log(mouseX, mouseY);
}
//Drop Fiche
function calculateX(a) {
  var x = mouseX;
  var b = round(x/120 + 0.5);
  console.log("b", b);
  var posX = 60 + 120 * (b - 1);
  return posX;
  
  //if (a < 120) {
   // return 60;
 // } else if (a < 240) {
  //  return 60+120;
 // } 
  
  //return a;
}

//Change Player
function mouseClicked () {

  var x = calculateX(mouseX);

  if (currentPlayer == "rood") {
    fill (255, 0, 0);
    ellipse(x, 780, 60, 60);
    currentPlayer = "geel";
  } else {
    fill (239, 247, 8);
    ellipse(x, 780, 60, 60);
    currentPlayer = "rood";
  }


  /*   
   if (mouseX < 420) {
   fill (239, 247, 8);
   ellipse(mouseX, mouseY, 60, 60);
   }
   if (mouseX > 420) {
   fill (255, 0, 0);
   ellipse(mouseX, mouseY, 60, 60);
   }
   ellipse(mouseX, mouseY, 60, 60);
   */
}  
