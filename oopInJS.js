const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // this.greeting = function(){
    //     console.log(`Welcome ${this.username}`);

    // }
return this;
}

const userOne = new User("hitesh", 12, true)
let userTwo = new User("ChaiAurCode", 11, false)
console.log(userTwo);

let user3=userTwo;
console.log(user3);

console.log("After changing user3  username");
user3.username="Ayush Jaiswal";
console.log(user3);

console.log("user2");

console.log(userTwo);
//console.log(userTwo);