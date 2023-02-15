

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

// var x = "12345";
// var temp = "";
// // Output - 54321
// console.log(x.length); // 5

// for (let i = x.length - 1; i >= 0; i--)
// {
//     temp = temp + x[i];
// }

// console.log(temp);



//var num = [10, 35, 68, 91, 25];

// for (let i = 0; i <= num.length - 1; i++)
// {
//     if (num[i] % 2 == 0)
//     {
//         console.log(`Given Number is Even = ${num[i]}`);
//     }
//     else
//     {
//         console.log(`Given Number is Odd = ${num[i]}`);
//     }
// }

// for (let i = 1; i <= 5; i++)
// {
//     console.log("Welcome");
// }

// var i = 0

// while (i < 5)
// {
//     console.log("Welcome");
//     i++;
// }

// let x = 0;
// let y = 0;
  
// while (x < 3)
// {
//     x++;   // 1, 2, 3
//     y = y + x; // 1      y = 1 + 2  //y = 3 + 3 = 6
// }

// console.log(y);
var StoreValue = '';
for (let i = 0; i < 10; i++){

    if (i == 4)
    {
        continue;
    }
    else
    {
        StoreValue += i;
    }    
}
// console.log(StoreValue);
// var i = 0;
// var j = 0;

// while (i < 5)
// {                      // i = 0 1 2 3
//     if (i === 3)
//     {
//         continue;
//     }
//     i++;
//     j = j + i;        // j = 1 + 2 = 3 + 3 = 6
// }

// console.log(j);

// let Day = "Test 01";

// if (Day == "Monday")
// {
//     console.log("Today is Monday");
// }
// else if (Day == "Tuesday")
// {
//     console.log("Today is Tuesday");
// }
// else if (Day == "Wednesday")
// {
//     console.log("Today is Wednesday");
// }
// else if (Day == "Thursday")
// {
//     console.log("Today is Thursday");
// }
// else if (Day == "Friday")
// {
//     console.log("Today is Friday");
// }
// else if (Day == "Saturday")
// {
//     console.log("Today is Saturday");
// }
// else if (Day == "Sunday")
// {
//     console.log("Today is Sunday");
// }
// else
// {
//     console.log("Please Enter Correct Day"); 
// }

var Day = "Wednesday";

switch (Day)
{
    default:
        console.log("Enter valid day");
        break;
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":   
    case "Wednesday":
        console.log("Wednesday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    case "Friday":
        console.log("Friday");
        break;
    case "Saturday":
        console.log("Saturday");
        break;
    case "Sunday":
        console.log("Sunday");
        break;
}




