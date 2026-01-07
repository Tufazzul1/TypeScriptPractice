{

    // Static 

    class Counter {
        static count : number = 0;

        static increment() {
           return Counter.count = Counter.count + 1;
        }

        decrement() {
            return Counter.count = Counter.count - 1;
        }
    }

    // const instance1 = new Counter();
    console.log(Counter.increment()); //1 --> differnt Memory

    // const instance2 = new Counter();
    console.log(Counter.increment()); //1 --> differnt Memory



}