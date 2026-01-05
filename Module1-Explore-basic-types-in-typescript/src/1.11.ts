{
    // ternary operator || optinal chaining || nullish coalescing operator

    // const age : number = 20;

    // if(age >= 18){
    //     console.log('adult')
    // }else {
    //     console.log('not adult')
    // }


    // const isAdult = age >= 19 ? "adult" : "not Adult";
    // console.log({isAdult});

    //nullish coalescing operator
    // null and undefined er upor bitti kore jokohn dicission make korte hoy // only for null and undefined
    
    const isAuthenticated = undefined;
    const result1 = isAuthenticated ?? "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest"
    console.log({result1}, {result2});

    type  User = {
        name : string;
        address : {
            city : string;
            road : string;
            presentAddres : string;
            perpemanentAddress?: string
        }
    }

    const user : User = {
        name : "Tufazzul",
        address :{
            city: "Sylhet",
            road : "Awsome",
            presentAddres : 'Sylhet sadar'
        }
    }


    const permannetAddress = user?.address?.perpemanentAddress ?? "Not available";
    console.log({permannetAddress} )
    // 
}