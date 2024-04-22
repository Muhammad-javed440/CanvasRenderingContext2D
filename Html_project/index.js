let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');
c.fillRect(100,100,100,100);
c.fillRect(200,200,100,100);
c.fillRect(300,300,100,100);
c.fillRect(400,400,100,100);
c.fillRect(500,500,100,100);
c.fillRect(600,400,100,100);
c.fillRect(700,300,100,100);
c.fillRect(800,200,100,100);
c.fillRect(900,100,100,100);
c.fillRect(500,100,100,100);

console.log(canvas);
