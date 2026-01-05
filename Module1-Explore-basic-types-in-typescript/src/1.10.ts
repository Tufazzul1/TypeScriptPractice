{
// 

// Union types

// type FrontendDeveloper = 'fakibazDeveloper' | 'JuniorDeveloper';
// type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper';
// type Developer = FrontendDeveloper | FullstackDeveloper;

// const newDeveloepr : FrontendDeveloper = 'JuniorDeveloper';


// type User ={
//     name : string ;
//     email : string ;
//     gender : 'Male' | 'Female';
//     bloodGroup : "O+"| "A+" | "B+"
// }

 
// const user1 : User = {
//     name : 'Jakir',
//     email : "ad@gmail.com",
//     gender : 'Male',
//     bloodGroup : "A+"
// }



// Intersection Type 
    type FrontendDeveloper = {
        skills : string[];
        designation1 : 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills : string[];
        designation2 : 'Backend Developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDeveloper : FullstackDeveloper ={
        skills : ['HTML', "CSS", 'Express'],
        designation1 : 'Frontend Developer',
        designation2 : 'Backend Developer'
    }

// 
}