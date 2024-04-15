let button=document.querySelectorAll('.button')
//aproach one using for loop
for(let i=0;i<button.length;i++)
{
    let buttonClick=button[i].addEventListener('click',()=>{
        document.querySelector('body').style.backgroundColor= button[i].getAttribute('id');
    })
}

// aproach two using forEach loop

// button.forEach(buttonClick => {
//    buttonClick.addEventListener('click',()=>{
//         document.querySelector('body').style.backgroundColor= buttonClick.getAttribute('id');
//     })
// });