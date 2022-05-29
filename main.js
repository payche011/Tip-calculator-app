const billInput = document.querySelector("#bill");
const pplInput = document.querySelector("#number-ppl");
const customInput = document.querySelector("#tip-box");
const tipBox = document.querySelectorAll(".tip-box p");
const resetBtn = document.querySelector("#reset");
const tipResult = document.querySelector(".tip-res");
const totalResult = document.querySelector(".total-res");
const tipAmount = document.querySelector(".tip-amount");
const total = document.querySelector(".total-amount");

resetBtn.addEventListener("click", restart);
billInput.addEventListener("input", totalBillVal);
customInput.addEventListener("input", customInputVal);
pplInput.addEventListener("input", pplInputVal);
tipBox.forEach((el) => {
  el.addEventListener("click", takeVal);
});

let billValue = 0.0; //default value
let customValue = 0.15; //default value -> 15% button is active
let pplValue = 1;

function totalBillVal() {
  billValue = parseFloat(billInput.value);

  calculateTip();
}

function customInputVal() {
  customValue = parseFloat(customInput.value / 100);

  calculateTip();
}

function pplInputVal() {
  pplValue = parseFloat(pplInput.value);

  if (pplValue < 1) {
    pplInput.setAttribute("placeholder", "you cant add minus value");
    alert("You can't Add minus value");
  } else {
    calculateTip();
  }
}

function calculateTip() {
  if (pplValue >= 1) {
    let tipAmount = (billValue * customValue) / pplValue;
    let total = (billValue + tipAmount) / pplValue;
    tipResult.innerHTML = "$" + tipAmount.toFixed(2);
    totalResult.innerHTML = "$" + total.toFixed(2);
  }
}

function takeVal(e) {
  tipBox.forEach((el) => {
    if (e.target.innerHTML == el.innerHTML) {
      let current = e.target;
      console.log(current);
      customValue = parseFloat(el.innerHTML) / 100;
    }
  });
  calculateTip();
}

function restart() {
  billInput.value = 0.0;
  customInput.value = "";
  pplInput.value = 1;
  tipResult.innerHTML = "$" + 0;
  totalResult.innerHTML = "$" + 0;
}
