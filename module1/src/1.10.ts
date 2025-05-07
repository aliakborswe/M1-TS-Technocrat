{
    //  Type Alias

    type TStudent = {
        name: string,
        age: number,
        gender: string,
        address: string,
        phone?: string,
        email: string
    }

    const student1: TStudent = {
        name: "John Doe",
        age: 20,
        gender: "male",
        address: "123 Main St",
        phone: "123-456-7890",
        email: "example@gmail.com"
    }
    console.log(student1.name); // John Doe

    const student2: TStudent = {
        name: "Jane Doe",
        age: 22,
        gender: "male",
        address: "456 Main St",
        email: "example@gmail.com"
    }

    console.log(student2.name); // Jane Doe
    console.log(student2.phone); // undefined

    type UserName = string
    const user: UserName = "aliakbor"

    type IsAdmin = boolean;
    const isAdmin: IsAdmin = true
    const isAdmin2: IsAdmin = false

    type Add = (a: number, b: number) => number
    const add: Add = (a: number, b: number): number => a + b; 
}