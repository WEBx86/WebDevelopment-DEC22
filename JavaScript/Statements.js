

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
// var StoreValue = '';
// for (let i = 0; i < 10; i++){

//     if (i == 4)
//     {
//         continue;
//     }
//     else
//     {
//         StoreValue += i;
//     }
// }
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

// var Day = "Wednesday";

// switch (Day)
// {
//     default:
//         console.log("Enter valid day");
//         break;
//     case "Monday":
//         console.log("Monday");
//         break;
//     case "Tuesday":
//     case "Wednesday":
//         console.log("Wednesday");
//         break;
//     case "Thursday":
//         console.log("Thursday");
//         break;
//     case "Friday":
//         console.log("Friday");
//         break;
//     case "Saturday":
//         console.log("Saturday");
//         break;
//     case "Sunday":
//         console.log("Sunday");
//         break;
// // }

// var x = 30;
// var y = 50;

// switch (true)
// {
//     case x > y:
//         console.log("Wrong Condition");
//         break;
//     case x < y:
//     case y > x:
//         console.log("Correct Condtion");
//         break;
//     default:
//         console.log("Nothing is happen");
// }

/*  
for in  - 
   
        object   
        var x = {
            name:"web",
            age:20
        }; 

        var Num = [10,20,30,40,50];        
         index number 
*/

// const object = { p: 1, q: 2, r: 3, s: 4 };
// const Num = [10, 20, 30, 40, 50, 60];

// for (let ObjectData in Num){
//     //console.log(ObjectData);
// }

// const StudentName = ["Test01", "Test02", "Test03", "Test04"];

// for (let Names of Num) {
   
//     if (Names == 40)
//     {
//         if (Names % 2 == 0)
//         {
//             console.log(`Given Number ${Names} is even`);
//         }
//     }
// }

// var Name = "Web Development";
// var x = 0;
// var y = 10;
// do {
//     console.log(Name);
//     x++;
// } while (x < y);

// var Marks = 90;

// if (Marks > 60)
// {
//     console.log("First Class With Distinction");
// }
// else {
//     console.log("Second with B Grade");
// }

/*
 Ternory  = ?


 Condition ? TrueExpression : FalseExpression;
 
*/

// var Marks = 90;

// const Result01 = Marks > 60 ? "First Class With Distinction" : "Second Class with B Grade";
// console.log(Result01);


// if (StudentMarks >= 70 && StudentMarks <= 95)
// {
//     console.log("Grad A");
// }
// else if (StudentMarks >= 50 && StudentMarks <= 69)
// {
//     console.log("Grad B");
// }
// else if (StudentMarks >= 30 && StudentMarks <= 49)
// {
//     console.log("Grad C");
// }
// else {
//     console.log("Fail");
// }


// var StudentMarks = 10;

// const Result = StudentMarks >= 70 && StudentMarks <= 95 ? "Grad A" : StudentMarks >= 50 && StudentMarks <= 69 ? "Grad B" : StudentMarks >= 30 && StudentMarks <= 49 ? "Grad C" : "Fail";
// console.log(Result);


// var strName = "WebDevelopment";


// for (let GetName of ArrName)
// {
//     console.log(GetName);
// }

// var object = { a: 1, b: 2, c: 3 };

// var ArrName = ["A", "B", "c"];
// for (let GetName in ArrName)
// {
//     console.log(ArrName[GetName]);
// }


// const y = arr.toString();
// console.log(y);

// const a = arr.join("+");
// console.log(a);

// var StudentNames = ["Test 01", "Demo", "Hello", "World"];
// StudentNames.sort();
// console.log(StudentNames);

// Push -
// var arr = [10, 20, 30, 40, 50];
// arr.push(60);   // Insert Last
// console.log(arr);
// arr.pop();   // Remove Last Element
// console.log("New Array : ", arr);
// arr.pop();
// console.log("New Array : ", arr);

// arr.shift(); // Remove First Element
// arr.shift();
// console.log(arr);
// arr.unshift(20);
// arr.unshift(10);
// console.log(arr);
// Name.reverse();
// console.log(Name);

// console.log(Array.isArray(Name));

// let Name = ["Test 01", "Demo", "Hello", "World"];
// let StudentName = ["Web", "Development", "TextData"];
// let ArrThree = [10, 20, 30, 40];
// const x = Name.concat(StudentName,ArrThree);

// console.log(x);
// slice
// Not Modify Original Array
// ArrName.slice(begin,end);
//ArrName.slice(1,3);

//var Values = ["Test 01", "Demo", "Hello", "World", "Web", "Development"];
// var x = Values.slice();
// console.log(x);


//splice - splice(start,deleteCount,replace);
// var StudetName = ["Test 01", "Demo", "Hello", "World", "Web", "Development"];
// StudetName.splice(0,6,"Hello","JavaScript","Web","Development");
// console.log(StudetName);

// var x = "Web Development";
// var y = 'Hello World';
// console.log(x.length);
// console.log(y.length);

// console.log("Hello All Welcome To x");

// console.log(`${y} ${x}`);

// console.log(strName.indexOf("o"));

// for (let i = 0; i <= strName.length - 1; i++)
// {
//     console.log(strName[i]);
// }

// var strName = "Hello World";
// var NameData = "Test Data";
// console.log(strName);
// console.log(strName.toUpperCase());
// console.log(strName.toLowerCase());
// console.log(strName.replace("Hello", "WEBx86"));

// console.log(strName.concat(NameData));
// console.log(strName + " " + NameData);
let NewString = "WEBx86 Infotech";

console.log(NewString.trim());
console.log(NewString.slice(2, 4));
console.log(NewString);
