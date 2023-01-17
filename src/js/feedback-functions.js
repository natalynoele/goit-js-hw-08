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
  const parsedData = load(LOCALSTORAGE_KEY);
  if (parsedData === undefined) {
    alert('Form fields cannot be empty. Please fill out the form');
    return;
  } else if (email.value === '' || message.value === '') {
    alert('Please fill in all the fields of the form');
    insertFormData(parsedData);
    console.log(parsedData);
  } else {
    console.log('Form data :>> ', parsedData);
    email.value = '';
    message.value = '';
    remove(LOCALSTORAGE_KEY);
  }
}

function fillFormFromLocalStorage() {
  const parsedData = load(LOCALSTORAGE_KEY);
  if (parsedData === undefined) {
    return;
  } else {
    insertFormData(parsedData);
  }
}

function insertFormData(formData) {
  Object.entries(formData).forEach(
    ([name, value]) => (form.elements[name].value = value)
  );
}

export {
  fillFormFromLocalStorage,
  onFormBtnSubmit,
  onFormTextFieldInput,
  form,
};
