let canvas = document.querySelector('canvas'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');
for(i=0; i<50; i++){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x,y,30,0,Math.PI*2,false);
    c.strokeStyle = 'blue';
    c.stroke();
    c.fillStyle = 'rgba(0,255,0,0.5)';
    
}