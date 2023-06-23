const jokePopup = document.getElementById('popup');
const jokeBtn = document.getElementById('joke');
const body = document.getElementById('body');

let unlock = true;

const timeout = 800;

jokeBtn.addEventListener ('click', event => {
/*     const currentPopup = jokePopup; */
    popupOpen(jokePopup);
    /* event.preventDefault(); */
})
const popupClose = document.querySelector('.popup__close');
popupClose.addEventListener('click', event => {
    event.preventDefault();
    popupCloseFunc();
})
function popupOpen(jokePopup) {
    jokePopup.classList.add('open');
    jokePopup.addEventListener('click', e => {
        if (!e.target.closest('popup__content')) {
            popupCloseFunc();
        }
    });
}
function popupCloseFunc(jokePopup) {
    jokePopup.classList.remove('open');
}