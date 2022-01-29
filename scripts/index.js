const repairRequestForm = document.querySelector('#repair-request-form');
const repairRequestInput = repairRequestForm.querySelector('input');
const repairRequestBtn = repairRequestForm.querySelector('button');

const footerForm = document.querySelector('#footer-form');
const footerInput = footerForm.querySelector('input');
const footerBtn = footerForm.querySelector('button');

repairRequestForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(repairRequestInput.value)

    if (window.innerWidth > 500) {
        repairRequestBtn.innerHTML = 'Круто, спасибо за доверие!'
    }

})

footerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(footerInput.value)

    if (window.innerWidth > 500) {
        footerBtn.innerHTML = 'Круто, спасибо за доверие!'
    }

})