// // for
// for(let i=0;i<=10;i++){
//     const c=i;
//     if(c===5)
//     console.log("5 is the best number");    
// console.log(`${c}`);
// }

// for(let i=1;i<=10;i++)
// {
//     let row='';
//     for (let j = 1; j <=i; j++) {
//         row+=`${j} `
//     }
//     console.log(row);
// }


// +++++++++++ for of loop++++++++++

let arr=[1,2,3,4,5,6,7]
for (const number of arr) {
    console.log(number);
}

//maps

const map =new Map();
map.set('IN','INDIA');
map.set('USA','UNITED STATE OF AMERICA')
map.set('FR',"Frrance");
for (const [key,value] of map) {
    console.log(`${key} - ${value}`);
}