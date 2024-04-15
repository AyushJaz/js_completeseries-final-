
let calculate = document.getElementById('calculate');
let result = document.querySelector('#result');
 calculate.addEventListener('click', () => {
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    if (height === '' || height <= 0 || isNaN(height)) {
        result.textContent= `Give Valid value of height`;
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.textContent= `Give Valid value of Weight`;
    }
    else {
        let bmi = ((weight) / ((height / 100) ** 2));
        result.textContent= `Result : ${bmi}`
    }
})