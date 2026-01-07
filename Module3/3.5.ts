{

    // Access Modifier in TypeScript

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount : number) {
            this._balance = this._balance + amount;
        }

        getBalance(){
            return this._balance;   
        }

    }



    const goribsAccount = new BankAccount(111, "Gorib", 100);
    goribsAccount.addDeposit(10);
    console.log(goribsAccount.getBalance());













}