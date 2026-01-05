{
    //nullable types / Unknown type

    const searchName = (value: string | null) => {

        if (value) {
            console.log("serching")
        } else {
            console.log("There is nothing to seach")
        }
    }

    // searchName(null);



    // Unknown Type ...... typeof

    const getSpeedInMeterPerSecond = (value: unknown) => {

        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }

        else if (typeof value === "string") {
            const [result, unit] = value.split(' ')
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`Else if console ${convertedSpeed} kmh^-1`);
        }
        else {
            console.log("Wrong Input")
        }
    };

    getSpeedInMeterPerSecond(100);


    // Never 
    function throwError(msg: string): never{
        throw new Error(msg);
    }
    
    throwError("Mushkil se error ho geya");




    // 
}