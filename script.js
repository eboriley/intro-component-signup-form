const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", event => {
    event.preventDefault();

    checkValues();
});

checkValues = () => {
    const first_name_value = first_name.value.trim();
    const last_name_value = last_name.value.trim();
    const email_value = email.value.trim();
    const password_value = password.value.trim();

    if (first_name_value === '') {
        checkErrorFor(first_name, 'First name cannot be empty');
    }

    if (last_name_value === '') {
        checkErrorFor(last_name, 'Last name cannot be empty');
    }

    if (email_value === '') {
        checkErrorFor(email, 'Email cannot be empty');
    } else if (!isEmail(email_value)) {
        checkErrorFor(email, 'Looks like this is not an email');
        email.style.color = 'hsl(0, 100%, 74%)';
        email.style.fontWeight = 'bold';
    }

    if (password_value === '') {
        checkErrorFor(password, 'Password cannnot be empty');
    }
}

checkErrorFor = (value, message) => {
    const form_control = value.parentElement;
    const small = form_control.querySelector('small');

    small.innerHTML = message;
    form_control.className = 'form-control error';
}

isEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}