/*
 * Student Name: Daniel Awotundun
 * Student ID: 
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: 1
 * Assignment: 2
 * Date Submitted: 2024-03-22 
 */



function isValidEmail(email){
    const emailregex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailregex.test(email);
    
}

function getDaysInMonth(monthIndex, year) {
    // Function to get the number of days in the month
    let leap = false; //I am using a boolean because it makes using a ternary operator more readable in the switch statement
    if(year % 4 == 0){
      if(year % 100 == 0){
        if(year % 400 == 0){
          leap = true;
        }
      } else{
        leap = true;
      }
    }
  
    let february = 0;

    switch(monthIndex){
      case 0:
        return 31;
      case 1:
        return february = leap ? 29 : 28; //ternary operator for leap year.
      case 2:
        return 31;
      case 3:
        return 30;
      case 4:
        return 31;
      case 5:
        return 30;
      case 6:
        return 31;
      case 7:
        return 31;
      case 8:
        return 30;
      case 9:
        return 31;
      case 10:
        return 30;
      case 11:
        return 31;
      default:
        return -1;
    }
}

function isAgeOfMajority(birthYear,birthMonth,birthDay){
    if((typeof(birthYear) != `number`) || (typeof(birthMonth) != `number`) || (typeof(birthDay) != `number`)){return false;}
    //javascript typeof returns a string. Why does leap year even matter?
    //oh because we are checking if it is a valid date.
    if((birthYear < 1920) || (birthYear > 2010)){return false;}
    if((birthMonth-1 < 0) || (birthMonth - 1 > 11)){return false;}
    if((birthDay < 1) ||(birthDay > getDaysInMonth(birthMonth-1,birthYear))){return false;}
    const TODAY = new Date();
    var adate = ''+birthYear+'/'+(birthMonth)+'/'+birthDay;
    adate = new Date(adate);
    return (((TODAY - adate)/86400000) >= 6570);
}



 console.log(isAgeOfMajority(2005,2,25)); // true – just old enough
 console.log(isAgeOfMajority(1997,2,29)); // false – not a leap year
 console.log(isAgeOfMajority(2008,5,1)); // false
console.log(isAgeOfMajority(2000,1,1)); // true //how do I test to see why this test case is failing?
//finally fixed it.
 console.log(isAgeOfMajority(1980,12,31)); // true
 console.log(isAgeOfMajority("1980","12",31)); // false – wrong data type in parameter




