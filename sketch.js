Sketch js

let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;

let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

let xRaquete = 10;
let yRaquete = 155;
let larguraRaquete = 10;
let alturaRaquete = 90;

let xRaqueteOponente = 580;
let yRaqueteOponente = 155;

let meuPlacar = 0;
let placarOponente = 0;

let trilha;
let ponto;
let raquetada;
function setup() {
  trilha.loop;
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  verificaBorda();
  desenhaRaquete(xRaquete, yRaquete);
  desenhaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete();
  movimentaRaqueteOponente();
  colisaoRaquete();
  mostraPlacar();
  contaPlacar();
  
}

function desenhaBolinha() {
  fill('blue');
  circle(xBolinha, yBolinha, diametro);
  
}
   // function desenhaBolinha() {
  // circle(xBolinha, yBolinha, diametro);


function movimentaBolinha() {
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
    
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
     velocidadeyBolinha *= -1;
  }
}

function desenhaRaquete(x, y) {
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentaRaquete(){
 if (keyIsDown(UP_ARROW)){
   yRaquete -= 10;
 }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  if (keyIsDown(87)){
   yRaqueteOponente -= 10;
 }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function colisaoRaquete(){
  if(xBolinha -raio <= xRaquete + larguraRaquete &&
    yBolinha + raio >= yRaquete &&
    yBolinha - raio <= yRaquete + alturaRaquete){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
  if(xBolinha + raio >= xRaqueteOponente &&
    yBolinha + raio >= yRaqueteOponente &&
    yBolinha - raio <= yRaqueteOponente + alturaRaquete){
    velocidadexBolinha *= -1;
  }
}
 function mostraPlacar(){
   fill('orange');
   rect(130, 5, 40, 25);
   rect(430, 5, 40, 25);
   fill(255);
   textSize(22);
   textAlign(CENTER);
   text(meuPlacar, 150, 25);
   text(placarOponente, 450, 25);
   
 }

function contaPlacar(){
  //   contabiliza placar do oponente
  if(xBolinha - raio <= 0){
    placarOponente += 1;
}
 // contabiliza meu placar
  if(xBolinha + raio >= width){
    meuPlacar += 1;
   }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}
    
