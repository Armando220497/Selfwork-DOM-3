let inputSeconds = document.querySelector('#inputSeconds');
let btnCountdown = document.querySelector('#btnCountdown');
let btnPausa = document.querySelector('#btnPausa');
let btnAzzera = document.querySelector('#btnAzzera');
let timerSec = document.querySelector('#timerSec');

let countdown;
let paused = false; // Variabile per tenere traccia dello stato di pausa
let userSec;

btnCountdown.addEventListener('click', function () {
    if (inputSeconds.value > 0) {
        userSec = parseInt(inputSeconds.value, 10);
        timerSec.textContent = userSec;

        btnCountdown.disabled = true; // Disabilita il pulsante "Countdown" dopo che il timer e' iniziato

        // Funzione countdown
        countdown = setInterval(function () {
            if (!paused) {
                userSec--;
                timerSec.textContent = userSec;

                if (userSec <= 0) {
                    clearInterval(countdown);
                    alert('Il tempo è scaduto!');
                    inputSeconds.value = '';
                    btnCountdown.disabled = false; // Riabilita il pulsante "Countdown" allo scadere del timer
                }
            }
        }, 1000);
    } else {
        alert('Inserire secondi');
        inputSeconds.value = '';
    }
});

btnPausa.addEventListener('click', function () {
    paused = !paused; // Inverte lo stato di pausa

    if (paused) {
        clearInterval(countdown); // Ferma il countdown
    } else {
        // Riprendi il countdown
        countdown = setInterval(function () {
            if (!paused) {
                userSec--;
                timerSec.textContent = userSec;

                if (userSec <= 0) {
                    clearInterval(countdown);
                    alert('Il tempo è scaduto!');
                    inputSeconds.value = '';
                    btnCountdown.disabled = false; // Riabilita il pulsante "Countdown" allo scadere del timer
                }
            }
        }, 1000);
    }
});

btnAzzera.addEventListener('click', function () {
    clearInterval(countdown); // Ferma il countdown
    inputSeconds.value = '';
    timerSec.textContent = '';
    paused = false; // Reimposta lo stato di pausa
    btnCountdown.disabled = false; // Riabilita il pulsante "Countdown"
});

inputSeconds.addEventListener('input', function () {
    btnCountdown.disabled = false; // Riabilita il pulsante "Countdown" quando l'input viene modificato
});
