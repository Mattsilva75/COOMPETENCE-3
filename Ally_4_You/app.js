const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

}

function close() {
    mainMenu.style.top = '-100%';
}

let typesArr = {

    playstation5: ['Fortnite', 'FIFA 21', 'REd death of redemption', 'NBA2K21', 'Call OF duty'], PC: ['league of legends', 'world of warcraft', 'diablo 3', 'call of duty', 'valorant'],
    XBOX: ['grand theft auto', 'assassin \'s creed', 'FIFA 21', 'REd death of redemption', 'NBA2K21', 'fortnite'], CSL: ['jeux'],
}


function changeContext(value) {
    if (typesArr.hasOwnProperty(value)) {
        let out = ''

        for (let i = 0; i < typesArr[value].length; i++) {
            out += '<option value="' + typesArr[value][i] + '">' + typesArr[value][i] + '</option>'
        }

        document.getElementById('option2').innerHTML = out
    }
}

changeContext('CSL')

new Vue({   //création de l'instance de Vue

    el: '#mon-app',
    data: {

        inpFunc: false,


    },

})




