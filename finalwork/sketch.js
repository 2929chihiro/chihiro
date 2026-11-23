// 最終課題を制作しよう


let nodes = []; 
const num = 15; 

function setup() {
  createCanvas(200, 200);
  

  for (let i = 0; i < num; i++) {
    nodes.push({
      x: random(width),
      y: random(height),
      vx: random(-2, 2), 
      vy: random(-1.5, 1.5), 
      size: random(6, 12),   
      c: color(random(100, 255), random(100, 255), random(150, 255), 200)
    });
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(244, 248, 255);

  
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      let d = dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      
      
      if (d < 90) {
        let alpha = map(d, 0, 130, 180, 0);
        stroke(120, 160, 230, alpha);
        strokeWeight(1.5);
        line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      }
    }
  }

  fill(180, 170, 250, 255); 
  noStroke();
  textAlign(CENTER, CENTER); 
  textSize(width * 0.25);    
  textStyle(BOLD);           
  text("IT", width / 2, height / 2);
  
  noStroke();
  for (let i = 0; i < nodes.length; i++) {
    let n = nodes[i];


  textSize(width * 0.05);    
  textStyle(NORMAL);          
  
  text("Global Culture", width / 2, height / 2 + width * 0.14);
    
    fill(n.c);
    ellipse(n.x, n.y, n.size);

  
    n.x += n.vx;
    n.y += n.vy;

     if (n.x < 0 || n.x > width)  { n.vx *= -1; }
    if (n.y < 0 || n.y > height) { n.vy *= -1; }
  }
}

