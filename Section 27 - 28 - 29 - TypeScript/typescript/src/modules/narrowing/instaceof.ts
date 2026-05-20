export const bootstrap = (): void => {

    class BankAccount {
        protected holder: string;
        protected balance: number;

        constructor (holder: string, balance: number){
            this.holder = holder
            this.balance = balance
        }

        public getHolder(): string {
            return this.holder
        }
    }

    class CheckingAccount extends BankAccount{
        private overdraftLimit: number;

        constructor(holder:string, balance: number,  overdraftLimit: number){
            super(holder, balance)
            this.overdraftLimit = overdraftLimit
        }

        public getOverdratLimit(): number {
            return this.overdraftLimit
        }
    }

    class SavingsAccount extends BankAccount {
        private interestRate: number;

        constructor(holder: string, balance: number, interestRate: number){
            super(holder, balance)
            this.interestRate = interestRate;
        }

        public getInterestRate(): number {
            return this.interestRate;
        }
    }

    // LISTA DE CONTAS BANCÁRIAS (LSP)
    const accountList: BankAccount[] = [
        new CheckingAccount('Alice', 1500, 300),
        new SavingsAccount('Joao', 4000, 0.005),
        new CheckingAccount('Maria', 10000, 3000),
        new SavingsAccount('Pedro', 1000, 0.005),
        
    ]

    
    function processAccount(accounts: BankAccount[]): void{
        accounts.forEach(account => {

            if ( account instanceof CheckingAccount ){
                console.log('Processando a conta corrente: ', account.getOverdratLimit())
            } else if ( account instanceof SavingsAccount ){
                console.log('Processando a conta poupança: ', account.getInterestRate())
            }
            console.log('-------------------------------')
        })
    }

    processAccount(accountList)

    /*  CONTEUDO DA AULA ANTERIOR
    ////////////////////////////////////////////////         
    ////////////////////////////////////////////////
    // const a = new BankAccount('Gabriel', 15000)
    // const b = new CheckingAccount(25000)

    // console.log(a)
    // console.log(typeof a)
    // console.log(a instanceof BankAccount )
    // console.log(a instanceof CheckingAccount )


    // function showDetails(account: BankAccount | CheckingAccount): void {
        
    //     if(account instanceof BankAccount){
    //         console.log(account.getHolder())
    //     } else if ( account instanceof CheckingAccount){
    //         console.log(account.getOverdratLimit)
    //     } else {
    //         console.error("conta não identificada")
    //     }

    // }

    // showDetails(a)
    // showDetails(b)
     */
}