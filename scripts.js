//переменные для попапа
const jokePopup = document.getElementById('popup');
const jokeBtn = document.getElementById('joke');
const popupClose = document.querySelector('.popup__close');
const jokeText = document.querySelector('.popup__text');
//функция для появления и закрытия попапа
function popupFunc () {
    jokeBtn.addEventListener('click', event => {        
        event.preventDefault();
        jokeApiReq ();
        jokePopup.classList.add('open');
        
    })
    popupClose.addEventListener('click', event => {
        event.preventDefault();
        jokePopup.classList.remove('open');
    })
}
popupFunc();

//функция запроса шутки с апи
async function jokeApiReq () {
    try {
        const apiKey = '39355f2c938446e9a0ac53c6bfcb3782';
        let response = await fetch(`https://api.spoonacular.com/food/jokes/random?apiKey=${apiKey}`);
        console.log(response);
        let joke = await response.json();
        jokeText.textContent = joke.text;
    }
    catch (error) {
        jokeText.textContent = `Server is not responding: ${error.message}`;
    }
}