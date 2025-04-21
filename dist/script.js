// Preciso criar uma listas com os 3 jogadores
personagem = ["", "", ""];

viloes = ["", "", ""];

forcaPersonagem = 0;
forcaViloes = 0;
alert(
  "Ainda está vazio… escolha três nomes de super-heróis para começar a aventura!: " +
    personagem
);
for (let i = 0; i < 3; i++) {
  escolhaPersonagem = prompt("Digite o nome do seu personagem" + (i + 1));
  personagem[i] = escolhaPersonagem;
  // Cauculat a força de cada jogador, e depois somar pea saber a força do time
  forcaPersonagem = forcaPersonagem = Math.floor(Math.random() * 10) + 1;
  // forcaPersonagem == Math.floor(Math.random() * 10) + 1 // maneira mais avançada de fazer a mesma coisa
}
console.log("Agora, o Array Personagem contém: " + personagem);
console.log("inicio viloes: " + viloes);
for (let i = 0; i < 3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 5);
  viloesPossiveis = [
    "Nazare tedesco",
    "Odette Hoytman",
    "Flora",
    "Carminha",
    "Laura Prudente da costa",
    "Bia falcão",
    "Fernanda Montenegro"
  ];
  viloes[i] = viloesPossiveis[indiceAleatorio];
  // Caucular a força de cada jogador do time do computador
  forcaViloes = forcaViloes = Math.floor(Math.random() * 10) + 1;
}
console.log("final viloes:" + viloes);

// Compara os dois times para saber que venceu

if (forcaPersonagem > forcaViloes) {
  alert(
    "Seu time é muito forte! Você ganhou a disputa de cabo de guerra! Sua força foi " +
      forcaPersonagem
  );
} else {
  if (forcaPersonagem < forcaViloes) {
    alert(
      "Seu time e fraguinho. O computador ganhou o cabo de guerra com a força de " +
        forcaViloes
    );
  } else {
    alert("Os dois times tem a mesma força! Vocês enpataram.");
  }
}