// let balance=600;
// if(balance < 500)
// {
//     console.log("less than");
// }
// else if(balance<750)
// {
//     console.log("less than 750");
// }
// else if(balance<900)
// {
//     console.log("less than 9000");  
// }
// else{
//     console.log("less than 1200");
// }


// const userLoggedin =true;
// const debitcard =true;
// const userLoggedinFromGoogle=false;
// const userLoggedinFromEmail=true;

// if(userLoggedin && debitcard){
//     console.log("Allowed to buy course");
// }
// if(userLoggedinFromEmail||userLoggedinFromGoogle) {
//     console.log("User Logged in");
// }

//++++++++++++++++++++ switch++++++++++++++++++++
// const month=3;
// switch(month)
// {
//     case 1: 
//     console.log("Jan");
//     break;

//     case 2: 
//     console.log("Feb");
//     break;
//     case 3: 
//     console.log("Mar");
//     break;
//     case 4: 
//     console.log("April");
//     break;
//     case 5: 
//     console.log("June");
//     break;
//     default:
//         console.log("none");
// }
//++++++++++************************* truththy and faulsy+++++++++++++*********

const userEmail="ajayush2004@gmail.com";
const userName=[];
const emptyObject={};
if(userEmail)
{
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values


// false ,0,-0,BigInt 0n, "", null,undefined,NaN


// truthy values
// "0",'false, " ",[],{}, function(){}
if(userName.length===0){
    console.log("Empty Array");
}
if(Object.keys(emptyObject).length===0)
{
    console.log("Empty object");
}
