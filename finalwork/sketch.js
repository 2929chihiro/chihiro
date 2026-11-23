// 最終課題を制作しよう


let nodes = []; // 点（ノード）を入れておく配列
const num = 15; // 点の数

function setup() {
  createCanvas(200, 200);
  
  // 最初の点を40個ランダムに作る
  for (let i = 0; i < num; i++) {
    nodes.push({
      x: random(width),
      y: random(height),
      vx: random(-2, 2), // ゆっくり動く横スピード
      vy: random(-1.5, 1.5), // ゆっくり動く縦スピード
      size: random(6, 12),   // 点の大きさ
      // カラフルなパステルカラーをランダムに設定
      c: color(random(100, 255), random(100, 255), random(150, 255), 200)
    });
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(245, 248, 255);

  // 1. 点と点をつなぐ線を描く
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      let d = dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      
      // 距離が 130 未満なら線でつなぐ！
      if (d < 90) {
        // 近づくほど線が濃くなる計算（map関数）
        let alpha = map(d, 0, 130, 180, 0);
        stroke(120, 160, 230, alpha);
        strokeWeight(1.5);
        line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      }
    }
  }

  fill(180, 170, 250, 255); // 淡いブルーの半透明（最後の 100 が透明度）
  noStroke();
  textAlign(CENTER, CENTER); // 文字の基準点を「真ん中」にする
  textSize(width * 0.25);    // 画面の横幅に合わせて大きさを自動調整
  textStyle(BOLD);           // 太字にする
  text("IT", width / 2, height / 2);
  // 2. 点を動かして描く
  noStroke();
  for (let i = 0; i < nodes.length; i++) {
    let n = nodes[i];


  textSize(width * 0.05);    // 「IT」よりかなり小さくする
  textStyle(NORMAL);          // 太字を解除してスッキリさせる（太字のままなら消してOK）
  // Y座標を少し下にずらして配置する
  text("Global Culture", width / 2, height / 2 + width * 0.14);
    
    fill(n.c);
    ellipse(n.x, n.y, n.size);

    // 位置を更新
    n.x += n.vx;
    n.y += n.vy;

     if (n.x < 0 || n.x > width)  { n.vx *= -1; }
    if (n.y < 0 || n.y > height) { n.vy *= -1; }
  }
}

