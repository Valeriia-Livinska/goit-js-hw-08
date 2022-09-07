import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let inputObject = {};

chekingPreviousEntrance();

// function onFormInput(event) {
//   const formData = new FormData(event.currentTarget);

//   for (let [key, value] of formData) {
//     inputObject[key] = value;
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputObject));
//   }
// }

function onFormInput(event) {
  inputObject = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputObject));
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(inputObject);
  form.reset();
  localStorage.clear();
}

function chekingPreviousEntrance() {
  const savedPreviousValues = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedPreviousValues = JSON.parse(savedPreviousValues);

  if (parsedPreviousValues) {
    email.value = parsedPreviousValues.email;
    message.value = parsedPreviousValues.message;
    inputObject = parsedPreviousValues;

    console.log('Previous input information was found');
  }
}
