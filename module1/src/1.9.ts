{
    // Object Destructuring
    
    const user = {
    id: 345,
    name: {
        firstName: "Md",
        middleName: "Ali",
        lastName: "Akbor",
    },
    contactNo: "01730255696",
    address: "Bangladesh",
    };


    const { contactNo, name:{middleName: midName} } = user;
    console.log(contactNo, midName); // 01730255696 Ali

    //  Array Destructuring
    const myFriends = ["Shakib", "Sabbir", "Shuvo", "Samiul", "Shamim"];
    const [ , , justFriend, ...rest] = myFriends;
    console.log(justFriend); // Shuvo
    console.log(rest); // [ 'Samiul', 'Shamim' ]
}