const singleMemory = document.getElementById("single-memory");
singleMemory.addEventListener('click', function () {
    memory.innerText = "0";
    updateTotalPrice();
});
const doubleMemory = document.getElementById("double-memory");
doubleMemory.addEventListener('click', function () {
    memory.innerText = "180";
    updateTotalPrice();
});

const singleStorage = document.getElementById("single-ssd");
singleStorage.addEventListener('click', function () {
    storage.innerText = "0";
    updateTotalPrice();
});
const doubleStorage = document.getElementById("double-ssd");
doubleStorage.addEventListener('click', function () {
    storage.innerText = "100";
    updateTotalPrice();
});
const tripleStorage = document.getElementById("triple-ssd");
tripleStorage.addEventListener('click', function () {
    storage.innerText = "180";
    updateTotalPrice();
});

const freeDelivery = document.getElementById("free-delivery");
freeDelivery.addEventListener('click', function () {
    shipping.innerText = "0";
    updateTotalPrice();
});
const urgentDelivery = document.getElementById("urgent-delivery");
urgentDelivery.addEventListener('click', function () {
    shipping.innerText = "20";
    updateTotalPrice();
});

const defaultValue = document.getElementById("best");
best.innerText = "1299";

const totalPrice = document.getElementById("total-price");
const grandTotal = document.getElementById("grand-total");
const applyPromo = document.getElementById("apply");

// calculation total price
function updateTotalPrice() {
    const defaultPrice = Number(best.innerText)
    const memoryPrice = Number(memory.innerText);
    const storagePrice = Number(storage.innerText);
    const shippingPrice = Number(shipping.innerText);
    const totalValue = defaultPrice + memoryPrice + storagePrice + shippingPrice;
    totalPrice.innerText = totalValue;
    grandTotal.innerText = totalValue;
    // console.log(totalValue);
    return totalValue;
}
// apply promocode for discount price
applyPromo.addEventListener('click', function () {
    let inputField = document.getElementById("input-value");
    let inputArea = inputField.value;
    if (inputArea == 'stevekaku') {
        // console.log('grnad previous', grandTotal)
        const grandTotalPrice = parseInt(updateTotalPrice() - (updateTotalPrice() * 20 / 100));
        document.getElementById("grand-total").innerText = grandTotalPrice;
    }
    else {
        alert("Something went wrong!! Try again!!")
    }
    // inputField = '';
    inputField.value = '';
});
