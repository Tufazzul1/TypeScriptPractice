{


    // Getter and Setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }



        // Setter
        set balance(ammount: number) {
            this._balance = this._balance + ammount;
        }

        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        // Getter 
        get balance() {
            return this._balance;
        }

        // getBalance() {
        //     return this._balance;
        // }

    }

    const goribsAccount = new BankAccount(111, "Gorib", 10);
    //goribsAccount.addDeposit(10); // Function call kore value gula add korchi
    //const myBalance = goribsAccount.balance; 

    // Setter use kore value ta access korchi
    goribsAccount.balance = 50;
    const myBalance = goribsAccount.balance; // property hisabe access korchi

    // setter use kore value ta add korchi
    console.log(myBalance);






}