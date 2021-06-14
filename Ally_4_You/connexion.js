let myForm = document.getElementById('myForm')

myForm.addEventListener('submit', function (e) {
    let nameInput = document.getElementById('floatingInput');
    let passInput = document.getElementById('floatingPassword');
    let monRegex = /^[a-zA-Z-0-9]+$/;

    if (nameInput.value.trim() == "") {
        let errorName = document.getElementById('mauvais');
        errorName.style.display = 'flex';
        errorName.innerHTML = "Le champs est vide";
        errorName.style.color = 'red';
        errorName.style.fontSize = '12px';
        e.preventDefault();
    } else if (monRegex.test(nameInput.value) == false) {
        let errorName = document.getElementById('mauvais');
        errorName.style.display = 'flex';
        errorName.innerHTML = "Lettres et chiffres uniquement.";
        errorName.style.color = 'red';
        errorName.style.fontSize = '12px';
        e.preventDefault();

    } else if (nameInput.value.length < 5) {
        let errorName = document.getElementById('mauvais');
        errorName.style.display = 'flex';
        errorName.innerHTML = "minimum 5 lettres";
        errorName.style.color = 'red';
        errorName.style.fontSize = '12px';
        e.preventDefault();
    } else {
        let errorName = document.getElementById('mauvais');
        errorName.style.display = 'none';
    };


    if (passInput.value.trim() == "" || passInput.value.length < 8) {
        let errorPass = document.getElementById('mdp');
        errorPass.style.display = 'flex';
        errorPass.innerHTML = "Minimum 8 caracteres";
        errorPass.style.color = 'red';
        errorPass.style.fontSize = '12px';
        e.preventDefault();
    } else if (passInput.value.length > 8) {
        let errorPass = document.getElementById('mdp');
        errorPass.style.display = 'none';
        errorPass.innerHTML = "Minimum 8 caracteres";
        errorPass.style.color = 'red';
        errorPass.style.fontSize = '12px';
        e.preventDefault();
    }


});

/*
let nameError = document.getElementById('floatingInput');
let errorName = document.getElementById('mauvais');
let monRegex = /^[a-zA-Z-0-9]+$/;
let passwordError = document.getElementById('floatingPassword');
let errorPass = document.getElementById('mdp');

function testName(e) {
    if (nameError.value.trim() == "") {
        errorName.style.display = 'flex';
        errorName.innerHTML = "Le champs est vide";
        errorName.style.color = 'red';
        errorName.style.fontSize = '12px';
    } else if (monRegex.test(nameError.value) == false) {
        errorName.style.display = 'flex';
        errorName.innerHTML = "Lettres et chiffres uniquement.";
        errorName.style.color = 'red';
        errorName.style.fontSize = '12px';
        e.preventDefault();

    } else if (nameError.value.length < 5) {
        errorName.style.display = 'flex';
        errorName.innerHTML = "minimum 5 lettres";
        errorName.style.color = 'red';
        errorName.style.fontSize = '12px';
        e.preventDefault();
    } else {
        errorName.style.display = 'none';
    };

};

function testPass(e) {

    if (passwordError.value.trim() == "") {
        errorPass.style.display = 'flex';
        errorPass.innerHTML = "Minimum 8 caracteres";
        errorPass.style.color = 'red';
        errorPass.style.fontSize = '12px';
        e.preventDefault();
    } else if (passwordError.value.length > 8) {
        errorPass.style.display = 'none';
        errorPass.innerHTML = "Minimum 8 caracteres";
        errorPass.style.color = 'red';
        errorPass.style.fontSize = '12px';
        e.preventDefault();
    };

};
function validation(e) {
    if (testName() == false) {
        e.preventDefault();
    }
}

*/

