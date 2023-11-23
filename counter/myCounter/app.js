let counter = 0;

const value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");

btn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increment")) {
      counter++;
    } else {
      counter = 0;
    }
    value.textContent = counter;
  });
 
});

