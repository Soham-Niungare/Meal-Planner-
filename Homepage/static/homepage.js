// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// const container = document.querySelector("#container");

// hamburger.addEventListener("click", () => {
//     console.log("Hamburger clicked!");
//     container.style.display = "block";
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-items").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))


let button = document.getElementById('BMIbtn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    const bmiOutput = document.getElementById('BMIoutput');
    bmiOutput.style.display = "block";
    let height_status = false, weight_status = false;

    if (height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if (weight === '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = 'Under weight : ' + bmi;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 'Normal : ' + bmi;
        } else {
            result.innerHTML = 'Over weight : ' + bmi;
        }
    } else {
        alert('The form has errors');
        result.innerHTML = '';
    }
});
