import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');
const throttleSave = throttle((key, value) => save(key, value), 500);

function onFormTextFieldInput() {
  const formData = new FormData(form);
  const formDataObj = {};
  formData.forEach((value, key) => (formDataObj[key] = value));
  throttleSave(LOCALSTORAGE_KEY, formDataObj);
}

function onFormBtnSubmit(event) {
  event.preventDefault();
  email.value = '';
  message.value = '';
  remove(LOCALSTORAGE_KEY);
}

function fillFormFromLocalStorage() {
  const parsedData = load(LOCALSTORAGE_KEY);
  if (parsedData === undefined) {
    return;  
  } else {
    email.value = parsedData.email;
    message.value = parsedData.message;
  }
}

export {
  fillFormFromLocalStorage,
  onFormBtnSubmit,
  onFormTextFieldInput,
  form,
};
