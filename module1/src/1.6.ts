
{
    // Reference type -- Object
    const user:{
        firstName: string,
        lastName: string,
        age: number,
        company: string,
        isAdmin: boolean
    } = {
        firstName: "Ali",
        lastName: "Akbor",
        age: 23,
        company: "ABC",
        isAdmin: true,
    }
    user.company = "ASTZO"
    console.log(user)
}