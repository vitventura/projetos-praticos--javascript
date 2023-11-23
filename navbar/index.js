const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links")
    //com classlist.yoggle e possivel adicionar classes css que nao estejam associadas diretamente no html
    //toggle e um metodo que pode ser acessado ao usar classlist
    //quando for fazer navbar nao esquecer de fazer mobile first
})

