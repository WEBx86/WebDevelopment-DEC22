

/*           1            2             4
    for(intialization, condition, Increment/Decrement)
    {
         //// 3 // Code Block 
    }
*/

// var j = 10;
// var sum = 0;

// //1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

// for (let i = 0; i <= j; i++)
// {
//     sum = sum + i;
// }

// console.log(sum);

// var Colors = ["Red", "Green", "Yellow", "White", "Orange"];

// var ArrLenght = Colors.length;
// console.log(ArrLenght);  // 5
               
// for (let i = 0; i <= ArrLenght - 1; i++)
// {
//     console.log(Colors[i]);
// }

 
// var x = [10, 20, 25, 30, 35];
// var sum = 0;

// var ArrLenght = x.length; //5
//                         5 - 1
// for (let i = 0; i <= ArrLenght - 1; i++)
// {
//     sum = sum + x[i];
// }

// console.log(sum);
// console.log(sum / ArrLenght);


/*                        5 <= 4
     i =  0 1 2 3 4 5 

     ArrLenght - 1 = 4

     Sum = 0 
     
      Sum = 0 + 10;   // 10
          = 10 + 20   // 30
          = 30 + 25   // 55
          = 55 + 30   // 85
          = 85 + 35   // 120
*/
// 0   1   2  3  4
// "1  2   3  4  5"

var x = "12345";
var temp = "";
// Output - 54321
console.log(x.length); // 5

for (let i = x.length - 1; i >= 0; i--)
{
    temp = temp + x[i];
}

console.log(temp);

