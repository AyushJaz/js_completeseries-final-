// array initialization

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// Array methods

// myArr.push(6) -> add a new element at the end
// myArr.push(7)
// myArr.pop() -> remove the last elament of the array

// myArr.unshift(9)-> add a new element at the begening
// myArr.shift() ->remove the first element of the array

// console.log(myArr.includes(9)); -> return boolean that is true if element is present elese faules 
// console.log(myArr.indexOf(3)); -> return the index of the elment if present if not then retrn -1

// const newArr = myArr.join() -> return a string of array element sperated by coamas type of newArr is string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)// .slice does not effect the original array and return the elements from thre starting element to the last element-1

console.log(myn1);//result of the slice 
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)// .splice does effect the original array and return the elements from thre starting element to the last element
console.log("C ", myArr);
console.log(myn2);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) -> will make a two dimentional array with fourth element of marvel heros as an array containg the element of dc_heros array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //->result

// const allHeros = marvel_heros.concat(dc_heros) -> return a new array having the element of both marval and dc heros
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //-> spreding operator the connect multiple arrays similar concat but can connet multiple arrays

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//-> convert multidimentional array to single dimentional arrays we can specify the depth of flatness
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3,"Ayush"));//-> create an array of variables ,constant , elements