{
    // promise

    type ToDo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const getToDo = async (): Promise<ToDo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        const data = await response.json();
        console.log(data)
        return data;
    }

    getToDo()


    type Something = { something: string };

    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = 'something' // if it is a object then the typw will be like {something : string} in every where
            if (data) {
                resolve(data)
            } else {
                reject('failed to load data')
            }
        })
    }

    // calling create promise function 
    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        // console.log(data)
        return data
    }

    showData();





    // 
}