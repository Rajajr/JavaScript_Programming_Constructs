//UC-3 Read a single digit number and write the number in word using case

console.log('Welcom to The Programe');
var readlineSync=require('readline-sync');
var option=readlineSync.question("1:Feet to Meter\t2:Feet to Inch\t3:Inch to Feet\t4:Meter to Feet");
console.log("-------------------------------------");
console.log("Scelet the Option : ");


switch(option)
{
    
    case "1":

       let num1=readlineSync.question("Enter the Number :");
       meter=num1*0.305;
       console.log("Feet To Meter Conversion is : "+meter+"m");
        
    break;

    case "2":
       let num2=readlineSync.question("Enter the Number :");
       let result1=num2*12;
       console.log("Feet to Inch is : "+result+"inch");
    break;

    case "3":
        let num3=readlineSync.question("Enter the Number :");
        feet =num3*0.35;
        console.log("Inch to Feet conversion is : "+feet+"Feet");
    break;

    case "4":
        let num4=readlineSync.question("Enter the Number :");
        mfeet=num4*3.28;
        console.log("Meter to Feet conversion is : "+mfeet+"Feet");
    break;

    default:
        console.log('Number is incorrect');
    break;
    

}


   




