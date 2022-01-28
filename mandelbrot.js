function mandelbrot(posx, posy, iterations, max){
    var c = {x: posx, y: posy};
    var z = {x: 0, y:0};
    var i = 1;
    while(z.x < max && z.y < max && i < iterations){
      z = {x: (Math.pow(z.x, 2)-Math.pow(z.y, 2))+c.x,y: (2*z.x*z.y)+c.y};
      if(z.x >= max || z.y >= max){
        return i;
      }
      i++;
    }
    if(z.x < max && z.y < max){
      return true;
    }
  }
  
function setup(){
  createCanvas(1000, 400);
  
    for(var a = 0; a < width; a++){
        
        for(var b = 0; b < height; b++){
          x = mandelbrot((a-width/2)/500, (b-height/2)/500, 500, 500)
            if(x == true){
              stroke(0);
            } else {
              stroke(x+100, 1.5*x, 1.5*x); 
            }
           point(a, b);
          }
    }
}
