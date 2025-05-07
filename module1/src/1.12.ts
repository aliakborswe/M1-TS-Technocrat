{
    // ternary operator || optional chaining || nullish coalescing operator
    const age: number = 18;

    if(age >= 18) {
        console.log("You are an adult.");
    }
    else {
        console.log("You are a minor.");
    }
    const isAdult = age >= 18 ? "You are an adult." : "You are a minor.";
    console.log(isAdult); // You are an adult.
    console.log({isAdult});  //{ isAdult: 'You are an adult.' }


    // nullish coalescing operator
    // null / undefined ---> decision making

    const isAuthenticated = ""; // null / undefined / false / 0 / "" / NaN
    const result1 = isAuthenticated ?? "Gest User";
    const result2 = isAuthenticated ? isAuthenticated: "Guest"
    console.log({result1},{result2}); // { result1: 'Gest User', result2: 'Gest User' }

    type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "ALi Akbor",
    address: {
      city: "ctg",
      road: "Mirpur-13 Road",
      presentAddress: "Dhaka town",
    },
  };

    const presentAddress = user?.address?.presentAddress ?? "Present address not found";
    console.log({presentAddress}); // { presentAddress: 'Dhaka town' }

}