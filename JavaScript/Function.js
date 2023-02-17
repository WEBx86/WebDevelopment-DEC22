
function Sum(x,y) {
    return  x + y;
}
// function Sub(x, y) {
//     let z = x - y;
//     return z;
// }

// console.log("Sub of two numbers : ",Sub(30, 10));
// console.log("Sum of two numbers : ", Sum(10, 20));

function DisplaySum(Num)
{
    var Sum = 0;
    for (let i = 0; i <= Num.length - 1; i++)
    {
        Sum += Num[i];       
    }
    return Sum;
}

var Num = [10, 20, 30, 40, 50];
var Num02 = [20, 30, 40, 50, 80, 90];

let x = DisplaySum(Num);
let y = DisplaySum(Num02);

console.log(y);
console.log(x);







