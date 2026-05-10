export const bootstrap = ():void => {

    type Person = {
        name: string,
        age: number
    }

    type Employee = {
        departament: String;
    }

    type Customer = {
        wishList: string[]
    }

    type EmployeeDetails = Person & Employee

    const employee: EmployeeDetails = {
        name: "Gabriel",
        age: 28,
        departament: 'TI'
    }

    type CustomerDetails = Person & Customer

    const customer: CustomerDetails = {
        name: 'Gabriel',
        age: 28,
        wishList: ['Notebook', 'Smartphone', 'TV']
    }

}