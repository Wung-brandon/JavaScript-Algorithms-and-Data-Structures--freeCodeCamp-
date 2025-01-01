let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDue = document.getElementById('change-due')
// console.log("data type", typeof(cash))

purchaseBtn.addEventListener('click',() => {
    const cash = Number(cashInput.value)
    // console.log("Customer cash:", cash);

    if (cash < price) {
        alert("Customer does not have enough money to purchase the item");
    } else if (cash === price) {
        changeDue.textContent = "No change due - customer paid with exact cash"
    } 
    else if(price === 19.5 && cash === 20 ){
        changeDue.textContent = "Status: OPEN QUARTER: $0.5"
    }
    
    else {
        alert("Customer has enough money to purchase the item and will receive change");
    }
})