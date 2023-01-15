import {fillFormFromLocalStorage, onFormBtnSubmit, onFormTextFieldInput, form} from './feedback-functions'

// const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormTextFieldInput);
form.addEventListener('submit', onFormBtnSubmit);

if (window.performance) {
  if (window.performance.getEntriesByType('navigation')[0].type === 'reload') {
    fillFormFromLocalStorage();
  }
}

