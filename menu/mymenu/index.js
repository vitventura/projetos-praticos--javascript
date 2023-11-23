const menu = [
  {
    id: 1,
    tittle: "geleiras glaciais",
    category: "breakfast",
    price: 15.99,
    img: "./images/camera-1.jpg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
  },

  {
    id: 2,
    tittle: "geleiras glaciais-2",
    category: "breakfast",
    price: 15.99,
    img: "./images/camera-2.jpg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
  },

  {
    id: 3,
    tittle: "geleiras glaciais-3",
    category: "breakfast",
    price: 15.99,
    img: "./images/camera-3.jpg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
  },

  {
    id: 4,
    tittle: "geleiras glaciais-4",
    category: "breakfast",
    price: 15.99,
    img: "./images/camera-4.jpg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
  },

  {
    id: 5,
    tittle: "geleiras glaciais-5",
    category: "breakfast",
    price: 15.99,
    img: "./images/ocean-1.jpg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
  },

  {
    id: 6,
    tittle: "geleiras glaciais-6",
    category: "breakfast",
    price: 15.99,
    img: "./images/people-1.jpg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
  },

  {
    id: 7,
    tittle: "geleiras glaciais-7",
    category: "lunch",
    price: 15.99,
    img: "./images/people-2.jpg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
  },

  {
    id: 8,
    tittle: "geleiras glaciais-8",
    category: "lunch",
    price: 15.99,
    img: "./images/people-3.jpg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
  },

  {
    id: 9,
    tittle: "geleiras glaciais-9",
    category: "shakes",
    price: 15.99,
    img: "./images/people-4.jpg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
  },

  {
    id: 10,
    tittle: "geleiras glaciais-10",
    category: "lunch",
    price: 15.99,
    img: "./images/item-10.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterButtons = document.querySelectorAll(".filter-btn")

window.addEventListener("DOMContentLoaded", function () {
 displayMenuItens(menu)
});

filterButtons.forEach(function(btn){
 btn.addEventListener("click", function(e){
   const category = e.currentTarget.dataset.id
   const menuCategory = menu.filter(function(menuItem){
  if(menuItem.category === category){
    return menuItem
  }
   })
   if(category === "all"){
    displayMenuItens(menu)
  }else{
    displayMenuItens(menuCategory)
  }
 })
})

function displayMenuItens(menuItens){
  let displayMenu = menuItens.map(function (item) {
    return `<article class="menu-item">
   <img src="${item.img}" alt="${item.tittle}" class="photo">
   <div class="item-info">
       <header>
           <h4>${item.category}</h4>
           <h4 class="price">${item.price}</h4>
       </header>
       <p class="item-text">
           ${item.desc}
       </p>
   </div>
</article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
