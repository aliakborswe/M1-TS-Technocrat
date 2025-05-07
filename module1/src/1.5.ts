{
  // Basic Data Type

  //string
  let firstName: string = "ali akbor";

  //number
  let roll: number = 123;

  //boolean
  let isAdmin: boolean = true;

  // undefined
  let x: undefined = undefined;

  // null
  let y: null = null;

  let d: number;

  d = 123;

  // Array

  let friends: string[] = ["Ali", "Akbor"];
  friends.push("Ali Akbar");

  let eligibleRollList: number[] = [1, 3];

  eligibleRollList.push("Ali Akbar");

  // tuple --> array --> order --> type of values

  let coordinates: [number, number] = [1, 5];
    coordinates[0] = 10;
    console.log(coordinates[0]); // 10

  let ageName: [number, string, boolean] = [50, "Mr.X", true];

  ageName[0] = 67;
}