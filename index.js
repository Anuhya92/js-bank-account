function bankAccount() {
  let balance = 0;
  let accountName = "Demo Account";

  function depositMoney() {
    const amount = parseFloat(prompt("Enter amount to be deposited"));
    const isInValidAmount = isNaN(amount);
    if (isInValidAmount) {
      console.error("Please enter valid amount...");
      depositMoney();
      return;
    }

    balance += amount;
    console.log(`Deposit successful, updated account balance: ${balance}`);
    atm();
  }

  function withdrawlMoney() {
    const amount = parseFloat(prompt("Enter amount to be withdrawn"));
    const isInValidAmount = isNaN(amount);
    const insufficientBalance = amount > balance;
    if (isInValidAmount || insufficientBalance) {
      console.error("Unable to withdraw money from the account.");
      withdrawlMoney();
      return;
    }
    balance = balance - amount;
    atm();
  }

  function getAccountName() {
    console.log(accountName);
    atm();
  }

  function getAccountBalance() {
    console.log(`Available balance: ${balance}`);
    atm();
  }

  function exitAccount() {
    console.log("Successfully exited from the account menu");
  }

  function atm() {
    const message = parseFloat(
      prompt(
        "Select a choice.\n 1) View balance \n 2) Deposit money \n 3) Withdrawl money \n 4) Get account name \n 5) Exit \n"
      )
    );

    switch (message) {
      case 1:
        getAccountBalance();
        break;
      case 2:
        depositMoney();
        break;
      case 3:
        withdrawlMoney();
        break;
      case 4:
        getAccountName();
        break;
      case 5:
        exitAccount();
        break;
    }
  }
  atm();
}
bankAccount();
