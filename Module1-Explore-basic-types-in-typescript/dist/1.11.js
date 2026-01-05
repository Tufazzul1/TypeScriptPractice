"use strict";
{
    // ternary operator || optinal chaining || nullish coalescing operator
    const age = 10;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    const isAdult = age >= 18 ? "adult" : "not Adult";
    console.log({ isAdult });
    // 
}
