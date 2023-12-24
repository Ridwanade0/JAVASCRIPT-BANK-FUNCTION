const balance = document.querySelector("#balance");
const history = document.getElementById("transaction-history");

const confirmDepositBTN = document.getElementById("deposit-input-operation");

let currentBalance = 0;

confirmDepositBTN.addEventListener('click', function() {
    let depositInput = document.getElementById("deposit-input-value");

 
    let depositNumberValue = parseFloat(depositInput.value);

    if (isNaN(depositNumberValue) || depositNumberValue == "" || depositNumberValue <= 0 ) {
        alert("enter valid deposit amount")
        return;
    }

    let newBalance = currentBalance + depositNumberValue;

    console.log(newBalance);

    currentBalance = newBalance;

    balance.textContent = newBalance.toFixed(2);

    depositInput.value = "";


});
