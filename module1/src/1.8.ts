{
    // spread operator
    // rest operator
    // destructuring

    // learn spread operator
    const frontendDevelopers: string[] = ['Alice', 'Bob', 'Charlie'];
    frontendDevelopers.push('Frank');
    const backendDevelopers: string[] = ['Dave', 'Eve', 'Frank'];
    backendDevelopers.push(...frontendDevelopers);
    console.log(backendDevelopers); // ['Dave', 'Eve', 'Frank', 'Alice', 'Bob', 'Charlie']

    const team = [...frontendDevelopers, ...backendDevelopers];
    console.log(team); // ['Alice', 'Bob', 'Charlie', 'Frank', 'Dave', 'Eve', 'Frank']

 const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };
 console.log(mentorList); // { typescript: 'Mezba', redux: 'Mir', dbms: 'Mizan', prisma: 'Firoz', next: 'Tanmoy', cloud: 'Nahid' }

//  learn rest operator
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [firstNumber, secondNumber, ...restOfNumbers] = numbers;
    console.log(firstNumber); // 1
    console.log(secondNumber); // 2
    console.log(restOfNumbers); // [3, 4, 5, 6, 7, 8, 9, 10]

    const greetFriends = (...friends: string[])=>{
        // console.log(`Hello ${friends.join(', ')}`);
        friends.forEach(friend => {
            console.log(`Hello ${friend}`);
        } );

    }
    greetFriends('Alice', 'Bob', 'Charlie'); // Hello Alice, Bob, Charlie

    // learn destructuring
    const person = {
        name: 'Alice',
        age: 25,
        address: {
            city: 'New York',
            country: 'USA'
        }
    };
    const { name, age } = person;
    console.log(name,age); // Alice

}