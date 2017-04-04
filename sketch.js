var cells = []
var rows = 1;
var cols = 3;
var w = 55;
var winning;
var nextStep = false;
var txt;
var pkt = 0;
var again;
var on = true;
var prob=0;
var prev;
var other
function setup() {
  createCanvas(cols*w+1,rows*w+1);
  txt = createP("Ile punktów: "+pkt+"___Ile prób: "+prob);
  again = createButton("start again");
  again.mousePressed(againa)
  for(var i=0 ; i<rows ; i++) {
    for(var j=0 ; j<cols ; j++) {
      cells.push(new Cell(j, i))
    }
  }
  winning = floor(random(cells.length));
  for(var i=0 ; i<cells.length ; i++) {
    cells[i].show();
  }
}

function draw() {
  for(var i=0 ; i<cells.length ; i++) {
    cells[i].show();
  //  if(cells[i].win==true) cells[i].col=100
  }
}



function mousePressed() {
  for(var i=0 ; i<cells.length ; i++) {
    var c=cells[i];

    if(c.x<mouseX && c.x+w>mouseX && c.y<mouseY && c.y+w>mouseY){
      if(!nextStep){
        prev = i
        if(i==winning) uncover1(i);
        else uncover2(i);
        nextStep = true;
        cells[i].col = color(50,50,255)
      } else if(i==winning || i==prev || i==other){
        finish(i);
      }
    }
  }
}


function finish(x) {
  if(x==winning && on)  pkt++;
  if(on) prob++;
  cells[winning].col=color(10,255,10)
  on=false;
  cells[winning].win=false;
  txt.html("Ile punktów: "+pkt+"___Ile prób: "+prob);
}

function againa() {
  on = true;
  nextStep = false;
  winning = floor(random(cells.length));
  for(var i=0 ; i<cells.length ; i++) {
    cells[i].col = color(50,50,255)
    if(i==winning) {
      cells[i].win = true;
    }
  }
}
