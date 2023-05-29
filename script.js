var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sign() {
    screen.value = -parseFloat(screen.value);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}