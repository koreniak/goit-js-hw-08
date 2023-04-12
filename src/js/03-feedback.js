import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', throttle(OnChangeInput, 1000));
feedbackForm.addEventListener('submit', onFormSubmit);

populateForm();

function OnChangeInput(e) {
    e.preventDefault();
    
    formData[e.target.name] = e.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log(formData);

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateForm() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        formData = JSON.parse(savedMessage)
        feedbackForm.email.value = formData.email;
        feedbackForm.message.value = formData.message;
    };
};
