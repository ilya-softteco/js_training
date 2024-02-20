let _number = 12.3;
console.log(_number, typeof(_number))


let _bigint = 90071992547409911n;
let _bigint2 = BigInt(90071992547409911555555555555555555);
let _bigint3 = 90071992547409911555555555555555555; //9.007.....
console.log(_bigint, typeof(_bigint))


let _string = 'hello';
console.log(_string, typeof(_string))


let _boolean = true
console.log(_boolean, typeof(_boolean))


let _null = null;
console.log(_null ,typeof(_null));//object


let _undefined;
console.log(_undefined ,typeof(_undefined));


let _object = {
    title: "Goshan",
    description: "Some text",
    countShop: 10,
}
console.log(_object ,typeof(_object));


let _idSymbol = Symbol('id');
console.log(_idSymbol ,typeof(_idSymbol));
let myObject = {};
myObject[_idSymbol] = 'Id Value';

