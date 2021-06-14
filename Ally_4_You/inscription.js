let myForm = document.getElementById('myForm')

myForm.addEventListener('submit', function (e) {
    let nameInput = document.getElementById('floatingInput');
    let passInput = document.getElementById('floatingPassword');
    let monRegex = /^[a-zA-Z-0-9]+$/;

    if (nameInput.value.trim() == "") {
        let errorName = document.getElementById('mauvais');
        errorName.innerHTML = "Le champs est vide";
        errorName.style.color = 'red';
        errorName.style.fontSize = '12px';
        e.preventDefault();
    } else if (monRegex.test(nameInput.value) == false) {
        let errorName = document.getElementById('mauvais');
        errorName.innerHTML = "Lettres et chiffres uniquement.";
        errorName.style.color = 'red';
        errorName.style.fontSize = '12px';
        e.preventDefault();

    } else if (nameInput.value.length < 5) {
        let errorName = document.getElementById('mauvais');
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
        errorPass.innerHTML = "Minimum 8 caracteres";
        errorPass.style.color = 'red';
        errorPass.style.fontSize = '12px';
        e.preventDefault();
    }

});
