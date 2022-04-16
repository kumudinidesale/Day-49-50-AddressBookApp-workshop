let isUpdate = false;
let contactObject = {};

window.addEventListener('DOMContentLoaded', (event) => {

    const name = document.querySelector('#fullName');
    const textError = document.querySelector('.name-error');
    name.addEventListener('input', function () {
        let names = document.querySelector('#fullName').value.split(" ");
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new Contact()).name = names[0];
            (new Contact()).lastName = names[1];
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const addressElement = document.querySelector('#address1');
    const addressError = document.querySelector('.address-error');
    addressElement.addEventListener('input', function () {
        let address = document.querySelector('#address1').value;
        try {
            (new Contact()).address = address;
            addressError.textContent = ""
        } catch (e) {
            addressError.textContent = e;
        }
    });

    const phoneElement = document.querySelector('#phno1');
    const phoneError = document.querySelector('.phone-error');
    phoneElement.addEventListener('input', function () {
        let phone = document.querySelector('#phno1').value;
        try {
            (new Contact()).phone = phone;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }

    });
    checkForUpdate();
});
