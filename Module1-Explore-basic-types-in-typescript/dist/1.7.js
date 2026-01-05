"use strict";
{
    // Spread oparation and
    // rest Operator
    // distructuring 
    // Learn Spread Operator
    const bros1 = ['Tufazzul', 'Husen', 'Muhammad'];
    const bros2 = ['Nahid', 'Mir', 'Shamim'];
    bros1.push(...bros2);
    const mentors1 = {
        typeScript: 'Mez',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        clouud: 'nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // learn rest operator
    const greetFriends = (...friends) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3} `)
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends('Abul', 'Kabul', 'Babul', 'Sabul', "kabil");
}
