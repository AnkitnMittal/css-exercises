const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const greetMeButton = document.querySelector('.review-btn');
const greetingOutput = document.querySelector('.greeting');

greetMeButton.addEventListener('click', (event) => {
    event.preventDefault();
    greetingOutput.textContent = `Hello ${firstName.value} ${lastName.value}`;
})