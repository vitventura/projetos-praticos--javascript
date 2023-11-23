const colors = ["#ff4d4d", "rgb(255, 255, 77)", "rgb(77, 210, 255)", "rgb(255, 77, 210)"]

const btn = document.getElementById('change-collor');
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    const ramdom = ramdomColors()
document.body.style.backgroundColor = colors[ramdom]

color.textContent = colors[ramdom]
})

function ramdomColors(){
   return Math.floor(Math.random() * colors.length)
}