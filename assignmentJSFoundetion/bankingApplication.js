const customerAccount = {
    name: "John Doe",
    balance: 1000,

    deposit: function(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited Rs. ${amount}. New balance: Rs. ${this.balance}`);
    },

    withdraw: function(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than zero.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew Rs. ${amount}. New balance: Rs. ${this.balance}`);
    }
};

console.log(`Initial balance: Rs. ${customerAccount.balance}`);

customerAccount.deposit(500);
customerAccount.withdraw(200);

customerAccount.withdraw(1500);
