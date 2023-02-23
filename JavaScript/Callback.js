// function Result(Fun, Arr) {
//         let NewArr = new Array(Arr.length);
        
//         for (let i = 0; i <= Arr.length - 1; i++){
//             NewArr[i] = Fun(Arr[i]);
//         }
    
//         return NewArr;
// }
    
// const Fun = function (x) {
//     return x * x * x;
// }

// var Values = [10, 20, 30, 40, 50];
// var Ret = Result(Fun, Values);
// console.log(Ret);

// 1 .
// function Display(x) {
//     console.log("Value of X: ", x);
// }

// function Sum(a,b) {
//     let sum = a + b;
//     return sum;
// }

// let Output = Sum(10, 20);
// Display(Output);

// 2.

// function Display(x) {
//     console.log("Value of X: ", x);
// }

// function Sum(a,b) {
//     let sum = a + b;
//     Display(sum);
// }

// Sum(10, 20);
//3.

// function Display(x) {
//     console.log("Value of X: ", x);
// }

// function fun(y) {
//     console.log("Inside fun",y);
// }

// function Sum(a,b,SendFunction) {
//     let sum = a + b;
//     SendFunction(sum);
// }
// Sum(10, 20, fun);

var x = [[1,2,3,5],[10,20,30,40,50]];

// // array.forEach(function(currentValue,index,arr), this)
// //return value => undefined;

x.forEach(function (value, index, arr) {
    console.log(value);
    value.forEach((element,index,arr) => {
        console.log(element,index,arr);
    }
    )
})

// setTimeOut
// setInterval

// setTimeout(function() {
//     Hello("Hi How Are You ?")
// }, 3000)

// function Hello(GetValue) {
//     console.log(GetValue);
// }

// setInterval(DataInterval,1000)
// function DataInterval() {
//     let a = new Date();
//     console.log(
//         a.getHours() + ":" +
//         a.getMinutes() + ":" +
//         a.getSeconds()
//     );
// }
