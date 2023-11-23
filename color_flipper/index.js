const colors = ["green", "red", "rgba(133,122,100)", "#f15025"];
//aqui definimos as cores em um array mas poderiamos pegar do html

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//aqui nesse .color pegamos o elemento html com a classe .color

btn.addEventListener("click", function () {
  const ramdomNumbers = ramdom();
  document.body.style.backgroundColor = colors[ramdomNumbers];
  //e necessario passar ramdomnumbers como indice do nosso array colors pois assim ele escolhe umma das cores disponiveis
  // aleatoriamente com base no calculo da funçao ramdom
  //o background passa  a ser nossas 4 cores disponiveis no indice da equaçao matematica que retorna uma cor aleatoria
  color.textContent = colors[ramdomNumbers];
  //setamos o conteudo do span html como nosso algoritmo de cores passando como indice as cores aleatorias
});

function ramdom() {
return Math.floor(Math.random() * colors.length);
 
  //retornamos o valor da funçao ramdom sendo uma cor aleatoria das 4 disponiveis
}
