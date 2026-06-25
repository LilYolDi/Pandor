const products = [
    { name: "Игровая мышка", price: "699 грн", image: "images/1.jpg" },
    { name: "Клавиатура RGB", price: "1299 грн", image: "images/2.jpg" },
    { name: "Наушники", price: "999 грн", image: "images/3.jpg" },
    { name: "Монитор 24", price: "4999 грн", image: "images/4.jpg" },
    { name: "SSD 1 ТБ", price: "2499 грн", image: "images/ssd.jpg" },
    { name: "Игровое кресло", price: "5999 грн", image: "images/chair.jpg" },
    { name: "Веб-камера Full HD", price: "899 грн", image: "images/camera.jpg" },
    { name: "Микрофон USB", price: "1499 грн", image: "images/microphone.jpg" },
    { name: "Коврик RGB", price: "499 грн", image: "images/mousepad.jpg" },
    { name: "Power Bank", price: "1199 грн", image: "images/powerbank.jpg" },
    { name: "Смарт часы", price: "2499 грн", image: "images/watch.jpg" },
    { name: "Bluetooth колонка", price: "1799 грн", image: "images/speaker.jpg" },
    { name: "Ноутбук Gaming", price: "32999 грн", image: "images/laptop.jpg" },
    { name: "Видеокарта RTX", price: "24999 грн", image: "images/gpu.jpg" },
    { name: "Процессор Ryzen 7", price: "11999 грн", image: "images/cpu.jpg" },
    { name: "Оперативная память 16GB", price: "2299 грн", image: "images/ram.jpg" },
    { name: "Корпус ПК", price: "1999 грн", image: "images/case.jpg" },
    { name: "Блок питания", price: "2699 грн", image: "images/psu.jpg" },
    { name: "Wi-Fi роутер", price: "1899 грн", image: "images/router.jpg" },
    { name: "Флешка 128GB", price: "499 грн", image: "images/usb.jpg" },
    { name: "HDD 2TB", price: "2999 грн", image: "images/hdd.jpg" },
    { name: "Геймпад", price: "1299 грн", image: "images/gamepad.jpg" },
    { name: "Планшет", price: "7999 грн", image: "images/tablet.jpg" },
    { name: "Смартфон Pro", price: "15999 грн", image: "images/phone.jpg" },
    { name: "Зарядка Type-C", price: "299 грн", image: "images/charger.jpg" },
    { name: "LED RGB лампа", price: "399 грн", image: "images/led.jpg" }
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




function openMenu() {
    document.getElementById("menu").style.left = "0";
}

function closeMenu() {
    document.getElementById("menu").style.left = "-300px";
}
