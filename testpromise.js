// const promise = new Promise((res,rej)=>{
//     setTimeout(
//         ()=>{
//         console.log("Time out done");
//         res();
//     },2000);
// })
// promise.then(()=>{console.log("PRomise consumed");})

// let promis2= new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res({username:'Ayush',email:'ajayush2874yf@gmail.com'});
//     },2000);
// })
// promis2.then((n)=>{
//     console.log(n.username);
//     console.log(n.email);
//     n.email='gaurav@gmail.com';
//     console.log(n.email);
//     n.phonenumber=8787555949580;
//     n.gf='none'
//     console.log(n);
// })

const promis3=new Promise(
    (res,reje)=>{
        let error =false;
        if(!error){
            res({username:'Ayush',email:'ajayush2874yf@gmail.com'})
        }
        else{
            reje("data not found");
        }
    }
)
promis3.then((n)=>{
    console.log(n);
}).catch((n)=>{
    console.log(n);
})