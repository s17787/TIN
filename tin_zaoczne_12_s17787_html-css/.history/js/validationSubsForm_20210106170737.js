function validateSubsForm() {
    const floristName = document.getElementById('florist_Name');
    const clientName = document.getElementById('client_Name');
    const Value = document.getElementById('value');
    const Information = document.getElementById('information');
    const dateFrom = document.getElementById('date_From');
    const dateTo = document.getElementById('date_To');
    const errorsSummary = document.getElementById('errorsSummary');

    const errorFloristName = document.getElementById('errorFloristName');
    const errorClientName = document.getElementById('errorClientName');
    const errorValue = document.getElementById('errorValue');
    const errorInformation = document.getElementById('errorInformation');
    const errorDateFrom = document.getElementById('errorDateFrom');
    const errorDateTo = document.getElementById('errorDateTo');
    const errorsSummary = document.getElementById('errorsSummary');

    let valid = true;

    resetErrors([floristName, clientName, Value, Information, dateFrom, dateTo], [errorFloristName, errorClientName, errorValue, errorInformation, errorDateFrom, errorDateTo], errorsSummary);

    if (!checkRequired(floristName.value)) {
        valid = false;
        floristName.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
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
        errorRegio.innerText = "Pole jest wymagane";
    } else if (!checkNumber(regionInput.value)) {
        valid = false;
        regionInput.classList.add("error-input");
        errorRegio.innerText = "Pole powinno zawierać prawidłowy numer";
    } else if (!checkTextLengthRange(regionInput.value, 2, 6)) {
        valid = false;
        regionInput.classList.add("error-input");
        errorRegio.innerText = "Pole powinno zawierać od 2 do 6 znaków";
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