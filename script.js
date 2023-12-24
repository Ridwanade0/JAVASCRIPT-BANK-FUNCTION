// const balance = document.querySelector("#balance");
// const history = document.getElementById("transaction-history");

// const confirmDepositBTN = document.getElementById("deposit-input-operation");

// let currentBalance = 0;

// confirmDepositBTN.addEventListener('click', function() {
//     let depositInput = document.getElementById("deposit-input-value");

 
//     let depositNumberValue = parseFloat(depositInput.value);

//     if (isNaN(depositNumberValue) || depositNumberValue == "" || depositNumberValue <= 0 ) {
//         alert("enter valid deposit amount")
//         return;
//     }

//     let newBalance = currentBalance + depositNumberValue;

//     console.log(newBalance);

//     currentBalance = newBalance;

//     balance.textContent = newBalance.toFixed(2);

//     depositInput.value = "";


// });


const balanceElement = document.querySelector("#balance");
const historyElement = document.getElementById("transaction-history");
const confirmDepositBTN = document.getElementById("deposit-input-operation");

// Load the current balance from localStorage or default to 0
let currentBalance = parseFloat(localStorage.getItem("currentBalance")) || 0;

// Set the initial balance on the page
balanceElement.textContent = currentBalance.toFixed(2);

confirmDepositBTN.addEventListener('click', function() {
    let depositInput = document.getElementById("deposit-input-value");
    let depositNumberValue = parseFloat(depositInput.value);

    if (isNaN(depositNumberValue)) {
        console.error("Error: Invalid or empty input in 'deposit-input-value'.");
        return; // Exit the function to avoid further errors
    }

    let newBalance = currentBalance + depositNumberValue;

    console.log(newBalance);

    // Update currentBalance and store it in localStorage
    currentBalance = newBalance;
    localStorage.setItem("currentBalance", currentBalance.toString());

    // Update the balance on the page
    balanceElement.textContent = newBalance.toFixed(2);

    // Additional: You can add the transaction to the history if needed
    // historyElement.innerHTML += `<div>Deposit: ${depositNumberValue.toFixed(2)}</div>`;
});

// Additional: If you want to clear the stored balance (e.g., on logout)
// localStorage.removeItem("currentBalance");
