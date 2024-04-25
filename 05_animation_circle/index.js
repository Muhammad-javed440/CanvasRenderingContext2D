let canvas = document.querySelector('canvas'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

let maxRadius = 40 ;
let minRadius = 2 ;

let colorArray = ['#ffaa33','#99ffaaa','#00ff00','#4411aa','#ff1100',];

let mouse = {
    x : undefined,
    y : undefined
}

window.addEventListener('mousemove',function(event){
    mouse.x = event.x ;
    mouse.y = event.y ;
    console.log(mouse) ;
})

function Circle(x,y,dx,dy,radius){
    this.x = x ;
    this.y = y ;
    this.dx = dx ;
    this.dy = dy ;
    this.radius = radius ;
     
    this.draw = function(){
        
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    c.strokeStyle = "red";
    c.stroke();
    c.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
    c.fill();
    
    }
    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = - this.dx ;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = - this.dy ;
        }
          this.x += this.dx ;
          this.y += this.dy ;
           // interactivity
           if(mouse.x - this.x < 50 && mouse.x - this.x > - 50 && mouse.y -this.y < 50 && mouse.y - this.y > - 50 ){
              if(this.radius < maxRadius){

               this.radius += 1 ;
             }
           }
           else if(this.radius > minRadius){
            this.radius -= 1;
           }
          
 

        this.draw();
    }
}
let circleArray = [];
for( let i=0; i<500; i++){ 

 let x = Math.random() * innerWidth ;
let y = Math.random() * innerHeight ;
let dx =  (Math.random() - 0.5) * 5 ;
let dy = (Math.random() - 0.5) * 5 ; 
let radius = 30
circleArray.push(new Circle(x,y,dx,dy,radius));
}

function animate(){
    requestAnimationFrame(animate);
c.clearRect(0,0,innerWidth,innerHeight);

for(let i=0; i<circleArray.length; i++){
    circleArray[i].update();
}

}

animate();

