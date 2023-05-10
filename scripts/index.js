const repairRequestForm = document.querySelector('#repair-request-form');
const repairRequestInput = repairRequestForm.querySelector('input');
const repairRequestBtn = repairRequestForm.querySelector('button');

const footerForm = document.querySelector('#footer-form');
const footerInput = footerForm.querySelector('input');
const footerBtn = footerForm.querySelector('button');

const timeOut = (input, button) => setTimeout(() => {
    if (window.innerWidth > 500) {
        button.innerHTML = 'Thank you for your trust!';
    };

    if (window.innerWidth < 500) {
        button.innerHTML = '👌';
    };

    input.value = '';
}, 900);

const timeOutAfterSendingEmail = (button) => setTimeout(() => {
    if (window.innerWidth > 500) {
        button.innerHTML = 'Repair your camera ✌️';
    };

    if (window.innerWidth < 500) {
        button.innerHTML = '✌️';
    };
}, 3000);


repairRequestForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (repairRequestInput.value) {
        console.log(repairRequestInput.value);
        timeOut(repairRequestInput, repairRequestBtn);
        timeOutAfterSendingEmail(repairRequestBtn);
    }
});

footerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (footerInput.value) {
        console.log(footerInput.value);
        timeOut(footerInput, footerBtn);
        timeOutAfterSendingEmail(footerBtn);
    };
});