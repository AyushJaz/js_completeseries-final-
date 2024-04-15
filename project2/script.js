
 let calculate=document.getElementById('calculate');
 calculate.addEventListener('click',()=>{
    let height=parseInt(document.getElementById('height').value);
let weight =parseInt(document.getElementById('weight').value);
    let bmi=((weight)/((height/100)**2));
    let result=document.querySelector('#result');
    result.textContent=`Result : ${bmi}`
 })