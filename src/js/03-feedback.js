import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', throttle(changeInput, 500));

function changeInput(event) {
    const currentValue = {
        email: event.currentTarget.email.value,
        message: event.currentTarget.message.value
    };
    console.log(event);

    localStorage.setItem("feedback-form-state", currentValue);
};

const localCurrentValue = localStorage.getItem("feedback-form-state");
