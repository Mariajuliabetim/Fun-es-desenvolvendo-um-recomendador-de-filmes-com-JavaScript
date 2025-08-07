let campoIdade;
let campoFantasia;
let campoAventira;

function setup() {
  createCanvas(800, 400);
   createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("12");
  campoFantasia = createCheckbox("Gosta de fantasia?");
   campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
    background("white");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let gostaDeAventura = campoAventura.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, );

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(40);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 12) {
    if (idade >= 16) {
      return "Gossip Girl";
    } else {
      if (idade >= 14) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Teen Wolf"; 
        }
      } else {
        if (gostaDeFantasia) {
          return "Vampire Diaries";
        } else {
          return "Arrow";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Flash"; 
    } else {
      return "Arrow"; 
    }
  }
}


