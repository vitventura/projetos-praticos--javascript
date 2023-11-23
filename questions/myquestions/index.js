const btns = document.querySelectorAll('.question-btn')
btns.forEach(function(e){
    e.addEventListener("click",function(btn){
        const buttons = btn.currentTarget.parentElement.parentElement;
        buttons.classList.toggle("show-text")
    })
   })
 