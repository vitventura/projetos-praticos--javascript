/*
const questions = document.querySelectorAll('.questions')

questions.forEach(function(e){
    const buttons = document.querySelector('.question-btn')
    buttons.addEventListener("click", function(){
        e.classList.toggle('show-text')
    })
})

*/
const btns = document.querySelectorAll('.question-btn')
btns.forEach(function(e){
    e.addEventListener("click",function(btn){
        const buttons = btn.currentTarget.parentElement.parentElement;
        buttons.classList.toggle("show-text")
    })
   })
 