

const bank = (function (names, email, balance) {
    'use strict';
    function printBalance() {
        console.log(this.names, this.email, this.balance);
    }
    function performTransaction(deposit, amount) {
        if (deposit === '+') {
            this.balance = amount += this.balance;
            return this.balance;
        } else {
            this.balance = this.balance - amount;
            return this.balance;
        }

    }
    return {
        names: names,
        email: email,
        balance: balance,
        printBalance: printBalance,
        performTransaction: performTransaction
    };

});




const account = bank('me', 'zupnikm@gmail.com', 700);
account.performTransaction('+', 900);
account.printBalance();
account.performTransaction('-', 32);
account.printBalance();



const bank2 = (function (names, email, balance) {
    'use strict';
    function printBalance() {
        console.log(this.names, this.email, this.balance);
    }

    return {
        names: names,
        email: email,
        balance: balance,
        printBalance: printBalance,
        performTransaction2:performTransaction2
    };
}
);
function performTransaction2(deposit, amount) {
    'use strict';
    if (deposit === '+') {
        this.balance = amount += this.balance;
        return this.balance;
    } else {
        this.balance = this.balance - amount;
        return this.balance;
    }


}

const account2 = bank2('me2', 'zupnikm@gmail.com2', 500);
performTransaction2.apply(account2,['-',30]);
account2.printBalance();
