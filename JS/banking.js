//deposit button event

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //update deposit
    const depositInput = document.getElementById("deposit-input");
    const inputDepositStr = depositInput.value;
    const inputDepositAmount = parseFloat(inputDepositStr);

    const depositTotal = document.getElementById("deposit-total");
    const totalDepositStr = depositTotal.innerText;
    const DepositAmount = parseFloat(totalDepositStr);

    const finalDepositTotal = DepositAmount + inputDepositAmount;

    depositTotal.innerText = finalDepositTotal;

    depositInput.value = "";

    //update balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalStr = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalStr);

    const finalBalanceTotal = previousBalanceTotal + finalDepositTotal;
    balanceTotal.innerText = finalBalanceTotal;
  });

//withdraw button event
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //updat withdraw
    const withdrawInput = document.getElementById("withdraw-input");
    const inputwithdrawStr = withdrawInput.value;
    const inputwithdrawAmount = parseFloat(inputwithdrawStr);

    const withdrawTotal = document.getElementById("withdraw-total");
    const totalwithdrawStr = withdrawTotal.innerText;
    const withdrawAmount = parseFloat(totalwithdrawStr);

    const finalwithdrawTotal = withdrawAmount + inputwithdrawAmount;

    withdrawTotal.innerText = finalwithdrawTotal;

    withdrawInput.value = "";

    //update balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalStr = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalStr);

    const finalBalanceTotal = previousBalanceTotal - finalwithdrawTotal;
    balanceTotal.innerText = finalBalanceTotal;
  });
