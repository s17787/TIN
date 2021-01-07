function validateFloristForm() {
    const nameInput = document.getElementById('Name');
    const adresInput = document.getElementById('Adres');
    const emailInput = document.getElementById('email');
    console.log('addend2:');
    const errorName = document.getElementById('errorName');
    const errorAdres = document.getElementById('errorAdres');
    const errorEmail = document.getElementById('errorEmail');
    const errorsSummary = document.getElementById('errorsSummary');

    let valid = true;

    resetErrors([nameInput, adresInput, emailInput], [errorName, errorAdres, errorEmail], errorsSummary);

    if (!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }   

    if (!checkRequired(adresInput.value)) {
        valid = false;
        adresInput.classList.add("error-input");
        errorAdres.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(adresInput.value, 5, 100)) {
        valid = false;
        adresInput.classList.add("error-input");
        errorAdres.innerText = "Pole powinno zawierać od 5 do 100 znaków";
    }

    if (!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać od 5 do 60 znaków";
    } else if (!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać prawidłowy adres email";
    }

    function resetErrors(inputs, errorTexts, errorInfo) {
        for(let i=0; i<inputs.length; i++) {
            inputs[i].classList.remove("error-input");
        }
        for(let i=0; i<errorTexts.length; i++) {
            errorTexts[i].innerText = "";
        }
        errorInfo.innerText = "";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}