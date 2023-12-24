const balanceElement = document.querySelector("#balance");
const historyElement = document.getElementById("transaction-history");
const confirmDepositBTN = document.getElementById("deposit-input-operation");
const confirmWithdrawBTN = document.getElementById("withdraw-input-operation");
const confirmTransferBTN = document.getElementById("transfer-input-operation");
// Load the current balance from localStorage or default to 0
let currentBalance = parseFloat(localStorage.getItem("currentBalance")) || 0;

// Set the initial balance on the page
balanceElement.textContent = currentBalance.toFixed(2);

confirmDepositBTN.addEventListener("click", function () {
  let depositInput = document.getElementById("deposit-input-value");
  let depositNumberValue = parseFloat(depositInput.value);

  if (
    isNaN(depositNumberValue) ||
    depositNumberValue == "" ||
    depositNumberValue <= 0
  ) {
    alert("enter valid input");
    return; // Exit the function to avoid further errors
  }

  let newBalance = currentBalance + depositNumberValue;

  console.log(newBalance);

  // Update currentBalance and store it in localStorage
  currentBalance = newBalance;
  localStorage.setItem("currentBalance", currentBalance.toString());

  depositInput.value = "";

  // Update the balance on the page
  balanceElement.textContent = newBalance.toFixed(2);
});
confirmWithdrawBTN.addEventListener("click", function () {
  let withdrawInput = document.getElementById("withdraw-input-value");
  let withdrawNumberValue = parseFloat(withdrawInput.value);

  if (
    isNaN(withdrawNumberValue) ||
    withdrawNumberValue == "" ||
    withdrawNumberValue <= 0 ||
    withdrawNumberValue > currentBalance
  ) {
    alert("enter valid input");
    return;
  }

  let newBalance = currentBalance - withdrawNumberValue;

  console.log(newBalance);

  // Update currentBalance and store it in localStorage
  currentBalance = newBalance;
  localStorage.setItem("currentBalance", currentBalance.toString());

  withdrawInput.value = "";

  // Update the balance on the page
  balanceElement.textContent = newBalance.toFixed(2);
});

confirmTransferBTN.addEventListener("click", function () {
  let transferInput = document.getElementById("transfer-input-value");
  let transferNumberValue = parseFloat(transferInput.value);
  let recipientName = document.getElementById("recipient-name");

  if (
    isNaN(transferNumberValue) ||
    transferNumberValue == "" ||
    transferNumberValue <= 0 ||
    transferNumberValue > currentBalance
  ) {
    alert("enter valid input");
    return;
  }

  let newBalance = currentBalance - transferNumberValue;

  console.log(newBalance);

  // Update currentBalance and store it in localStorage
  currentBalance = newBalance;
  localStorage.setItem("currentBalance", currentBalance.toString());

  transferInput.value = "";
  recipientName.value = "";
  // Update the balance on the page
  balanceElement.textContent = newBalance.toFixed(2);
});
