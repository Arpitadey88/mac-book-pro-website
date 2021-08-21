const singleMemory = document.getElementById("single-memory");
singleMemory.addEventListener('click', function(){
    price.innerText = "0";
});
const doubleMemory = document.getElementById("double-memory");
doubleMemory.addEventListener('click', function(){
    price.innerText = "180";
});

const singleStorage = document.getElementById("single-ssd");
singleStorage.addEventListener('click', function(){
    pricessd.innerText = "0";
});
const doubleStorage = document.getElementById("double-ssd");
doubleStorage.addEventListener('click', function(){
    pricessd.innerText = "100";
});
const tripleStorage = document.getElementById("triple-ssd");
tripleStorage.addEventListener('click', function(){
    pricessd.innerText = "180";
});

const freeDelivery = document.getElementById("free-delivery");
freeDelivery.addEventListener('click', function(){
    cost.innerText = "0";
});
const urgentDelivery = document.getElementById("urgent-delivery");
urgentDelivery.addEventListener('click', function(){
    cost.innerText = "20";
});