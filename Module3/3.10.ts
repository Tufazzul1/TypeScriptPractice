{

    // Access Modifier in TypeScript

    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount : number) {
            this._balance = this._balance + amount;
        }

        private getBalance(){
            return this._balance;   
        }

        gethiddenBalance (){
            return this.getBalance();
        }

    }

    class StudentAccount extends BankAccount {
        test(){
            return this.gethiddenBalance();
        }
    }

    const goribsAccount = new StudentAccount(111, "Gorib", 100);
    goribsAccount.addDeposit(10);
    console.log(goribsAccount.gethiddenBalance());













}