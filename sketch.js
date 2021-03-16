//let Xtimes = 10;
//let Ytimes = 10;
let nb;
let nbarray = [];

//隨機顏色
function getRandom(c){return Math.floor(Math.random()*c);}
r = getRandom(255);
g = getRandom(255);
b = getRandom(255);

//規則說明
function ruuuuule(){
  alert("滑鼠點擊→變換顏色 \n 空白鍵→重置 \n 滑鼠移至方塊上可放大、加速");
}

function setup() {
  createCanvas(500, 500, WEBGL); //使用3D方式進行渲染
  //nb = new myBox(50,50,0,50);
  for(let i = 0 ; i < 5 ; i += 1){
    nbarray.push(new myBox(50,-height/2+(height/5)*i,0,50));
  }
}

function draw() {
  background(200);
  //for (開始的定義 ; 怎麼樣會停止 ; 每次重做時改變什麼)
  /*
  for (let i = 0 ; i < Xtimes ; i = i+1){
    for (let j = 0 ; j < Ytimes ; j = j+1){
  push(); //移動物件 程式判定由下向上
    fill(i*16,50,i*16,80);
    translate(-width/2+i*(width/Xtimes),
              -height/2+j*(width/Ytimes),
              0);
    rotateX(mouseX * 0.001*i);
    rotateY(mouseY * 0.001*i);
    noStroke()
    box(width/20+sin(PI/i)*width/40);
  pop();
  }
  }
  */
  nbarray.forEach((v)=>{v.display();});
}

//滑鼠點擊時顏色變更
function mouseClicked() {
  r = getRandom(255);
  g = getRandom(255);
  b = getRandom(255);
}
//按下空白鍵重置
function keyPressed(ESCAPE) {
  location.reload();
}

class myBox{
  constructor(x,y,z, size){
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.mx = 1.5
    this.my = 1.3
  }
  display(){
    push();
    translate(this.x,this.y,this.z);
    if(mouseX-width/2 > this.x-this.size/2 &&
       mouseX-width/2 < this.x+this.size/2 &&
       mouseY-height/2 > this.y-this.size/2 &&
       mouseY-height/2 < this.y+this.size/2 ){
      this.size = this.size + 2; //滑鼠於範圍內時方塊放大
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      //加速
      if(this.mx>0){this.mx = this.mx + 0.2;}
      if(this.mx<0){this.mx = this.mx - 0.2;}
      if(this.my>0){this.my = this.my + 0.3;}
      if(this.my<0){this.my = this.my - 0.3;}
    }
    stroke(r);
    fill(r,g,b);
    box(this.size);
    //移動、觸碰邊緣反彈與變色
    if(this.x>width/2){
      this.mx = -1.3;
      r = getRandom(255);
      g = getRandom(255);
      b = getRandom(255);}
    if(this.x<-width/2){
      this.mx = 1.3;
      r = getRandom(255);
      g = getRandom(255);
      b = getRandom(255);}
    this.x = this.x+this.mx;
    if(this.y>height/2){
      this.my = -1.5;
      r = getRandom(255);
      g = getRandom(255);
      b = getRandom(255);}
    if(this.y<-height/2){
      this.my = 1.5;      
      r = getRandom(255);
      g = getRandom(255);
      b = getRandom(255);}
    this.y = this.y+this.my;
    pop();
  }
}