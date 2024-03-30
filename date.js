let date = new Date();
console.log(date);

let dateToString=date.toDateString()//convert the original value to more readabal form
console.log(dateToString);

let dateToJson=date.toJSON(); //convert the original value to a string
console.log(dateToJson); 
console.log(typeof(dateToString));

let dateToLocaleDateString=date.toLocaleDateString();//convert the original value to local standered string forem eg in india its dd/mm/yy
console.log(dateToLocaleDateString);
console.log(typeof(dateToLocaleDateString));

let dateGetTime=date.getTime();//return time in mili second from year1991 as numbers
console.log(dateGetTime);
console.log(typeof dateGetTime);

let dateGetDate=date.getDate()//return current date as a number
console.log(dateGetDate);
console.log(typeof dateGetDate);

let dateGetDay=date.getDay()//return current day as number starting index 1
console.log(dateGetDay);
console.log(typeof dateGetDay);

