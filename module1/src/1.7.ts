{
    // Learning Function
    // Normal Function
    // Arrow Function

    function add(a: number, b: number): number {
        return a+b;
    }
    const result = add(5, 10);
    console.log(result)

    // Arrow Function
    const addArrow = (a: number, b: number): number => a + b;
    const resultArrow = addArrow(5, 100);   
    console.log(resultArrow)

    // object ---> function ---> method
    const richUser = {
        name: 'Ali Akbor',
        age: 23,
        balance: 1000000,
        addMoney: function (balance: number): string{
            return `${this.name} has ${this.balance + balance} money`;
        }
    }
    console.log(richUser.addMoney(3000));

    const arr: number[] = [1, 2, 3, 4, 5];
    const newArray : number[] = arr.map((item: number) => item * 2);
    console.log(newArray);

}