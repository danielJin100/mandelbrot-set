function mandelbrot(posx, posy, iterations, max){
    var c = {x: posx, y: posy};
    var z = {x: 0, y:0};
    var i = 1;
    while(z.x < max && z.y < max && i < iterations){
      z = {x: (z.x*z.x-z.y*z.y)+c.x,y: (2*z.x*z.y)+c.y};
      if(z.x >= max || z.y >= max){
        return false;
      }
      i++;
    }
    if(z.x < max && z.y < max){
      return true;
    }
  }
  
function setup(){
  createCanvas(1000, 400);
  for(var c = 1; c <= 500; c++){
    if(c === 500){
        stroke(0);
    } else {
        stroke(c+100, 1.5*c, 1.5*c); 
    }
    for(var a = 0; a < width; a++){
        for(var b = 0; b < height; b++){
            if(mandelbrot((a-width/2)/100, (b-height/2)/100, c, c)){
                point(a, b);
            }
        }
    }
}
}