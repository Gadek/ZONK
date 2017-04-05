function Cell(x,y) {
  this.x = x*w;
  this.y = y*w;
  this.col = color(50,50,255);
  this.show=function() {
    fill(this.col);
    rect(this.x,this.y,w,w);
  }
}

function index(x,y) {
  if(x<0 || y<0 || x>rows-1 || y>cols-1) {
    return -1;
  } else return x+y*cols;
}


function uncover1(x) {
  do {
    other = floor(random(cells.length))
  } while (other == winning)
  for(var i=0 ; i<cells.length ; i++) {
    if(i != other)cells[i].col = 255;
  }
}

function uncover2(x) {
  for(var i=0 ; i<cells.length ; i++) {
    if(i != winning)cells[i].col = 255;
  }
}
