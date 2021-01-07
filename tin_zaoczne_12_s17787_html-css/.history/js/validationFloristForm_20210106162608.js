function validateFloristForm() {
    const nameInput = document.getElementById('Name');
    const adresInput = document.getElementById('Adres');
    const regionInput = document.getElementById('regio_number');

    const errorName = document.getElementById('errorName');
    const errorAdres = document.getElementById('errorAdres');
    const errorRegio = document.getElementById('errorRegionNumber');
    const errorsSummary = document.getElementById('errorsSummary');

    let valid = true;

    resetErrors([nameInput, adresInput, regionInput], [errorName, errorAdres, errorRegio], errorsSummary);

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

    if (!checkRequired(regionInput.value)) {
        valid = false;
        regionInput.classList.add("error-input");
        errorEmail.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(regionInput.value, 5, 6)) {
        valid = false;
        regionInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać od 5 do 6 znaków";
    } else if (!checkEmail(regionInput.value)) {
        valid = false;
        regionInput.classList.add("error-input");
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