let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
  console.log(btn)
  btn.addEventListener("click", function (e) {
    //e somente referecnia o acionador de eventos,
    // nao podemos acessar classes css com somente fazendo : e.classList
    const styles = e.currentTarget.classList;
    console.log(e.currentTarget.classList
      )
    //currenttarget se refere ao elemento que disparou o evento que no nosso caso sao todos os botoes 
    //com .classlist ele pega todas as classes de todos os botoes
    if (styles.contains("decrease")) {
      //o metodo contains verifica se os nosss botoes tem a classe css 'decrease',retorna true ou false 
      count--;
      //se tiver decrease o contador vira ngativo 
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
    //na variavel value que pega o span html adicionamos como conteudo de texto a variavel count
  });
});
