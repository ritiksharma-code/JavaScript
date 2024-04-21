// .checked = property that determines the checked state of an HTML checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are not subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `Your are paying with Visa!`;
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = `Your are paying with Mastercard!`;
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `Your are paying with Paypal!`;
    }
    else{
        paymentResult.textContent = `You must select a payment type!`;
    }
}