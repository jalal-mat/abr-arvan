const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const company = document.getElementById('company');
const resume = document.getElementById('resume_input');
const abr_kind = document.getElementById('abr_kind');
const abr_level = document.getElementById('abr_level');
const textArea = document.querySelector('.register__text-area');
const submitBtn = document.querySelector('.register__btn--submit');
const form = document.querySelector('.register__form');
let nameAct, phoneAct, mailAct = false;

const _checkNameValidation = function (name) {
    if (name.split(' ').length < 2) {
        return false;
    }
    if (/\d/.test(name)) {
        return false;
    }
    return true;
};
const _checkPhoneValidation = function (num) {
    if (isNaN(num)) {
        return false;
    }
    if (String(num).length !== 11) {
        return false;
    }
    if (String(num).slice(0, 2) !== '09') {
        return false;
    }
    return true;
};
const _checkMailValidation = function (mail) {
    if (!mail.includes('@')) {
        return false;
    }
    const mailParts = mail.split('@');
    if (mailParts.length !== 2 || !mailParts[0] || !mailParts[1]) {
        return false;
    }
    const mailDotParts = mail.split('.');
    if (mailDotParts.length < 2 || !mailDotParts[0] || !mailDotParts[mailDotParts.length - 1]) {
        return false;
    }
    return true;
};

const _checkActivation = function () {
    console.log(nameAct, phoneAct, mailAct);
    if (nameAct && phoneAct && mailAct) {
        submitBtn.disabled = false;
    }
};

export const checkName = function () {
    name.addEventListener('focusout', function () {
        if (_checkNameValidation(name.value)) {
            name.style.border = '.2rem solid #20C4BA';
            nameAct = true;
        } else {
            name.style.border = '.2rem solid #F77D7D';
            nameAct = false;
        }

        _checkActivation();
    });
};

export const checkMail = function () {
    email.addEventListener('focusout', function () {
        if (_checkMailValidation(email.value)) {
            email.style.border = '.2rem solid #20C4BA';
            mailAct = true;
        } else {
            email.style.border = '.2rem solid #F77D7D';
            mailAct = false;
        }

        _checkActivation();
    });
};

export const checkPhone = function () {
    phone.addEventListener('focusout', function () {
        if (_checkPhoneValidation(phone.value)) {
            phone.style.border = '.2rem solid #20C4BA';
            phoneAct = true;
        } else {
            phone.style.border = '.2rem solid #F77D7D';
            phoneAct = false;
        }

        _checkActivation();
    });
};

export const submitForm = function () {
    document.querySelector('.register__btn--submit').addEventListener('click', function (e) {
        e.preventDefault();
    });
};