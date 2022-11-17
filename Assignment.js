//UC-2 read a number and Display the week day

var readlineSync=require('readline-sync');
var number=readlineSync.question('Enter the number: ');

switch(number)
{
    
    case 1:
       console.log('Sunday')
        
    break;

    case 2:
        console.log('Monday')
    break;

    case 3:
        console.log('Tuesday')
    break;

    case 4:
      console.log('Wednesday')
    break;

    case 5:
      console.log("Thursday")
    break;

    case 6:
        console.log("Friday")
    break;
    
    case 7:
        console.log("Saturday")
    break;
    
    default:
        console.log('Enter the Number correct');
    break;
    

}


   




