{
    //  union type
    type FrontendDeveloper = "juniorDeveloper" | "FakibazDeveloper";
    type BackendDeveloper = "juniorDeveloper" | "seniorDeveloper" | "leadDeveloper";
    type Developer = FrontendDeveloper | BackendDeveloper;

    const newDeveloper : FrontendDeveloper = 'FakibazDeveloper';
    const oldDeveloper : Developer = 'leadDeveloper';
    // console.log(newDeveloper)


    type TUser = {
        name: string;
        email?: string;
        gender: "male" | "female";
        bloodGroup: string;
    }
    const user1: TUser = {
        name: "John Doe",
        gender: "male",
        bloodGroup: "O+",
    }


    type TFrontendDeveloper = {
        skills: string[];
        designation1:"FrontendDeveloper"
    }
    type TBackendDeveloper = {
        skills: string[];
        designation2:"BackendDeveloper"
    }
    type TFullStackDeveloper = TFrontendDeveloper & TBackendDeveloper;
    const fullStackDeveloper: TFullStackDeveloper = {
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        designation1: "FrontendDeveloper",
        designation2: "BackendDeveloper"
    }
    console.log(fullStackDeveloper)

}