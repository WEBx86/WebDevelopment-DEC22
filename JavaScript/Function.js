
// function Sum(x,y) {
//     return  x + y;
// }
// function Sub(x, y) {
//     let z = x - y;
//     return z;
// }

// console.log("Sub of two numbers : ",Sub(30, 10));
// console.log("Sum of two numbers : ", Sum(10, 20));

// function DisplaySum(Num)
// {
//     var Sum = 0;
//     for (let i = 0; i <= Num.length - 1; i++)
//     {
//         Sum += Num[i];
//     }
//     return Sum;
// }

// var Num = [10, 20, 30, 40, 50];
// var Num02 = [20, 30, 40, 50, 80, 90];

// let x = DisplaySum(Num);
// let y = DisplaySum(Num02);

// console.log(y);
// console.log(x);


/*
    1. Function Declaration 
    2. Function Expression 
    3. Arrow Function (Fat Arrow)



*/
// Function Defination /  Function Statement / Function declaration

// function Sum(a,b) {
//     return a + b;
// }

// console.log(Sum(10, 20));

// var x = 10;
// var y = 20;


// const MyFunction = function (MyArr) {

//     var Sum = 0;

//     for (let i = 0; i <= MyArr.length - 1; i++)
//     {
//         Sum += MyArr[i];
//     }
//     return Sum;
// };

var x = [10, 20, 30, 40, 50];
var Result = MyFunction(x);
console.log(Result);

function Result(Fun, Arr) {
    let NewArr = new Array(Arr.length);
    
    for (let i = 0; i <= Arr.length - 1; i++){
        NewArr[i] = Fun(Arr[i]);
    }

    return NewArr;
}

const Fun = function (x) {
    return x * x * x;
}

var Values = [10, 20, 30, 40, 50];
var Ret = Result(Fun, Values);
console.log(Ret);

// const ReturnSquare = function (Val) {
//     let NewArr = [];

//     for (let i = 0; i <= Val.length - 1; i++)
//     {
//         NewArr[i] = Val[i] * Val[i];
//     }
//     return NewArr;
// }

// var x = [10, 20, 30, 40, 50];
// var Result = ReturnSquare(x);
// console.log(Result);


// Fat Arrow Function

// function Sum() {
//     let x = 10;
//     let y = 20;
//     let z = x + y;
//     return z;
// }
// console.log(Sum());

// const x = function () {
//     let x = 10;
//     let y = 20;
//     let z = x + y;
//     return z;
// }
// console.log(x());

// const Sum = () => {
//     let a = 5;
//     let b = 10;

//     return a + b;
// }
// console.log(Sum());

// let a = 15;
// let b = 10;
// const Sum02 = () => {
//     return a + b;
// };

// console.log(Sum02());

// let x = 25;
// let y = 35;

// const Sum03 = () => x + y;
// console.log(Sum03());



