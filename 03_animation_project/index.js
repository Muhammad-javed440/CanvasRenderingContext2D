let canvas = document.querySelector('canvas'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

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
    c.fillStyle = 'blue';
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
        this.draw();
    }
}
let circleArray = [];
for( let i=0; i<70; i++){ 

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

