class A {
    #privateProperty
    constructor() {
        this.publicProperty = 'Public Property';
        this._protectedProperty = 'Protected Property';
        this.#privateProperty = 'private Property';
        console.log('Class A')
    }
}

class B extends A {
        #privateProperty;
    constructor() {
        super()
        console.log(this.publicProperty)
        console.log(this._protectedProperty)
        console.log(this.#privateProperty) //undefined
        console.log('Class B')

    }

}

//const a = new A();
const b = new B();




class Basic {
    constructor() {
        this.#myPrivateMethod();
    }

    hello() {
        return 'Hello, world';
    }

    #myPrivateMethod() {
        console.log('Это приватный метод');
    }

}

/*

class Basic2 extends Basic {
    constructor() {
        super()
        this.#myPrivateMethod();
    }

}







class Human  {
    constructor(name) {
        this.name = name;
    }
    sayMyName() {
        return 'Hello, I am ' + this.name;
    }
}

class Men extends Human {
    constructor(name) {
        super(name) // вызывает конструктор Human с аргументом name
    }
}

class Coder extends Human {
    constructor(name) {
        super(name)
    }
}


const basic = new Basic();


const alex = new Men('Alex');
const leo = new Coder('Leo');

console.log(alex.sayMyName()); // Вывод: Hello, I am Alex
console.log(leo.sayMyName()); // Вывод: Hello, I am Leo*/
