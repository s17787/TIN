function validateSubsForm() {
    const floristName = document.getElementById('florist_Name');
    const clientName = document.getElementById('client_Name');
    const Value = document.getElementById('value');
    const Information = document.getElementById('information');
    const dateFrom = document.getElementById('date_From');
    const dateTo = document.getElementById('date_To');

    const errorFloristName = document.getElementById('errorFloristName');
    const errorClientName = document.getElementById('errorClientName');
    const errorValue = document.getElementById('errorValue');
    const errorInformation = document.getElementById('errorInformation');
    const errorDateFrom = document.getElementById('errorDateFrom');
    const errorDateTo = document.getElementById('errorDateTo');
    const errorsSummary = document.getElementById('errorsSummary');

    let valid = true;

    resetErrors([floristName, clientName, Value, Information, dateFrom, dateTo], [errorFloristName, errorClientName, errorValue, errorInformation, errorDateFrom, errorDateTo], errorsSummary);

    if (!checkDropdownRequired(floristName.value)) {
        valid = false;
        floristName.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    }

    if (!checkDropdownRequired(clientName.value)) {
        valid = false;
        clientName.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    }

    if (!checkRequired(Value.value)) {
        valid = false;
        Value.classList.add("error-input");
        errorRegio.innerText = "Pole jest wymagane";
    } else if (!checkNumber(Value.value)) {
        valid = false;
        Value.classList.add("error-input");
        errorRegio.innerText = "Pole powinno zawierać prawidłową kwotę";
    } else if (!checkNumberRange(Value.value, 2, 6)) {
        valid = false;
        Value.classList.add("error-input");
        errorRegio.innerText = "Pole powinno zawierać kwotę od 10 do 10000 (PLN)";
    }

    if (!checkRequired(Information.value)) {
    }

    if (!checkRequired(dateFromInput.value)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorDateFrom.innerText = "Pole jest wymagane";
    } else if (!checkDate(dateFromInput.value)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorDateFrom.innerText = "Pole powinno zawierać datę w formacie yyyy-MM-dd (np. 2000-01-01)";
    } else if (checkDateIfAfter(dateFromInput.value, nowString)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorDateFrom.innerText = "Data nie może być z przyszłości";
    } else if (checkRequired(dateToInput.value) && checkDate(dateToInput.value)
        && !checkDateIfAfter(dateToInput.value, dateFromInput.value)) {
        //jeśli data od oraz data do jest poprawna, sprawdzamy kolejność dat
        valid = false;
        dateToInput.classList.add("error-input");
        errorDateTo.innerText = "Data do powinna być późniejsza niż data od";
    }

    if (!checkRequired(dateFromInput.value)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorDateFrom.innerText = "Pole jest wymagane";
    } else if (!checkDate(dateFromInput.value)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorDateFrom.innerText = "Pole powinno zawierać datę w formacie yyyy-MM-dd (np. 2000-01-01)";
    } else if (checkDateIfAfter(dateFromInput.value, nowString)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorDateFrom.innerText = "Data nie może być z przyszłości";
    } else if (checkRequired(dateToInput.value) && checkDate(dateToInput.value)
        && !checkDateIfAfter(dateToInput.value, dateFromInput.value)) {
        //jeśli data od oraz data do jest poprawna, sprawdzamy kolejność dat
        valid = false;
        dateToInput.classList.add("error-input");
        errorDateTo.innerText = "Data do powinna być późniejsza niż data od";
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