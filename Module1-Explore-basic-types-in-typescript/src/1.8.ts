{
    // Destructuring 


    // Object destructuring 
    const user = {
        id: 351,
        name: {
            firstName: "md",
            middleName: "Tufazzul",
            secondName: "Husen"
        },
        constactNo: '01795749543',
        address: "Uganda"
    }

    const { id, constactNo, name: { middleName: midName } } = user;


    // Array destructuring 

    const myFriends = ['Hello', 'Mello', 'Gelo', 'Chello', "Tello"]

    const [, , bestFrined] = myFriends; //For finding 3 number index
    const [, , testFriend, ...rest] = myFriends;


}
