const products = [
    { name: "Игровая мышка", price: "699 грн", image: "images/1.jpg" },
    { name: "Клавиатура RGB", price: "1299 грн", image: "images/2.jpg" },
    { name: "Наушники", price: "999 грн", image: "images/3.jpg" },
    { name: "Монитор 24", price: "4999 грн", image: "images/4.jpg" },
    { name: "SSD 1 ТБ", price: "2499 грн", image: "images/5.jpg" },
    { name: "Игровое кресло", price: "5999 грн", image: "images/6.jpg" },
    { name: "Веб-камера Full HD", price: "899 грн", image: "images/7.jpg" },
    { name: "Микрофон USB", price: "1499 грн", image: "images/8.jpg" },
    { name: "Коврик RGB", price: "499 грн", image: "images/9.jpg" },
    { name: "Power Bank", price: "1199 грн", image: "images/10.jpg" },
    { name: "Смарт часы", price: "2499 грн", image: "images/11.jpg" },
    { name: "Bluetooth колонка", price: "1799 грн", image: "images/12.jpg" },
    { name: "Ноутбук Gaming", price: "32999 грн", image: "images/13.jpg" },
    { name: "Видеокарта RTX", price: "24999 грн", image: "images/14.jpg" },
    { name: "Процессор Ryzen 7", price: "11999 грн", image: "images/15.jpg" },
    { name: "Оперативная память 16GB", price: "2299 грн", image: "images/16.jpg" },
    { name: "Корпус ПК", price: "1999 грн", image: "images/17.jpg" },
    { name: "Блок питания", price: "2699 грн", image: "images/18.jpg" },
    { name: "Wi-Fi роутер", price: "1899 грн", image: "images/19.jpg" },
    { name: "Флешка 128GB", price: "499 грн", image: "images/20.jpg" },
    { name: "HDD 2TB", price: "2999 грн", image: "images/21.jpg" },
    { name: "Геймпад", price: "1299 грн", image: "images/22.jpg" },
    { name: "Планшет", price: "7999 грн", image: "images/23.jpg" },
    { name: "Смартфон Pro", price: "15999 грн", image: "images/24.jpg" },
    { name: "Зарядка Type-C", price: "299 грн", image: "images/25.jpg" },
    { name: "LED RGB лампа", price: "399 грн", image: "images/26.jpg" }
];

let box = document.getElementById("products");

function showProducts(list){

box.innerHTML="";

list.forEach((product,index)=>{

box.innerHTML+=`

<div class="card">

<img src="${product.image}">

<div class="info">

<div class="title">
${product.name}
</div>

<div class="price">
${product.price}
</div>

<button class="buy" onclick="buy(${index})">
Купить
</button>

</div>

</div>

`;

});

}

function buy(index){

let product=products[index].name;

window.open(

"https://t.me/Kukuruzaa7?text="+
encodeURIComponent("Хочу заказать: "+product),

"_blank"

);

}

showProducts(products);

document.getElementById("search").oninput=function(){

let text=this.value.toLowerCase();

let result=products.filter(product=>

product.name.toLowerCase().includes(text)

);

showProducts(result);

};

function openTelegram(){

window.open(
"https://t.me/Kukuruzaa7?text=" +
encodeURIComponent("Хочу подать объявление"),
"_blank"
);

}

function openMenu(){
alert("PANDOR SHOP — магазин техники и аксессуаров.");
}
