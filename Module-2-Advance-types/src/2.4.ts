{
    // Interface - generic


    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T;
        bike? : X;
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string

    }

    const poorDeveloper: Developer<EmilabWatch> = {
        name: "Tufazzul",
        computer: {
            brand: 'acer',
            model: '12',
            releaseYear: 2018
        },
        smartWatch: {
            brand: 'samsung',
            model: 'kw66',
            display: 'Oled'
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface SujukiBike{
        model : string;
        engineCapacity : string;
    }

    const richdeveloper: Developer<AppleWatch, SujukiBike> = {
        name: "Persian",
        computer: {
            brand: 'HP',
            model: '12',
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'Something',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: 'sujuki sf',
            engineCapacity: '150cc'
        }
    }






    // 
}