const usernameInput = document.getElementById("username-input");
const usernameHint = document.getElementById("username-hint");

const passwordInput = document.getElementById("password-input");
const passwordHint = document.getElementById("password-hint");

const emailInput = document.getElementById("email-input");
const emailHint = document.getElementById("email-hint");

const nevInput = document.getElementById("nev-input");
const nevHint = document.getElementById("nev-hint");

const kartyaInput = document.getElementById("kartya-input");
const kartyaHint = document.getElementById("kartya-hint");

const submitBtn = document.getElementById("submit-btn");

function validateInput(_targetInput) {
    
    let result;
    
    switch (_targetInput) {
        case "username":
            const usernameRegex = /^[a-z]{6,30}$/;
            result = usernameRegex.test(usernameInput.value);
        
            if (result === false) {
                usernameInput.style.borderColor = "red";
                usernameHint.style.color = "red";
                usernameHint.innerText = "A felhasználónévnek 6 és 30 karakter közötti hosszúságúnak kell lennie. Csak kisbetűket használhat";
            } else {
                usernameInput.style.borderColor = "";
                usernameHint.innerText = "";
            }
            formState.validUsername = result;
            formState.toggleSubmitBtn();
            break;
        case "password":
            if (passwordInput.value.length >= 8 && passwordInput.value.length <= 256) {
                const containsLowercase = /[a-z]/;
                const containsUppercase = /[A-Z]/;
                const containsNumber = /\d/;
                const containsSymbol = /\W/;

                result = containsLowercase.test(passwordInput.value) && containsUppercase.test(passwordInput.value) && containsNumber.test(passwordInput.value) && containsSymbol.test(passwordInput.value);
                if (result === false) {
                    passwordInput.style.borderColor = "red";
                    passwordHint.style.color = "red";
                    passwordHint.innerText = "Használjon kis- és nagybetűket, számokat és szimbólumokat vegyesen tartalmazó karaktereket"
                } else {
                    passwordInput.style.borderColor = "";
                    passwordHint.innerText = "";
                }
            } else {
                passwordInput.style.borderColor = "red";
                passwordHint.style.color = "red";
                passwordHint.innerText = "A jelszó hossza legalább 8 karakter vagy legfeljebb 256 karakter lehet"
            }
            formState.validPassword = result;
            formState.toggleSubmitBtn();
            break;
        case "email":
            emailInput.value = emailInput.value.toLowerCase();
            const accountNameSection = emailInput.value.split('@')[0];
            if (accountNameSection.length >= 2 && accountNameSection.length <= 64) {
                const emailRegex = /^[a-z]+\.?[a-z0-9]+@[a-z0-9]{2,64}\.(com|org)$/i;

                result = emailRegex.test(emailInput.value);

                if (result === false) {
                    emailInput.style.borderColor = "red";
                    emailHint.style.color = "red";
                    emailHint.innerText = "Írja be az e-mail címet a valaki@example.com VAGY valaki@example.org formátumban";
                } else {
                    emailInput.style.borderColor = "";
                    emailHint.innerText = "";
                }
            } else {
                emailInput.style.borderColor = "red";
                emailHint.style.color = "red";
                emailHint.innerText = "Az e-mail fióknév részének 2 és 64 karakter közötti hosszúságúnak kell lennie. Csak betűk, (a-z) számok (0-9) és pontok (.) megengedettek.";
            }
            formState.validEmail = result;
            formState.toggleSubmitBtn();
            break;
        case "nev":
            const nevRegex = /^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ-]{3,15} [a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ]{3,15}$/;
            result = nevRegex.test(nevInput.value);
            
            if (result === false) {
                nevInput.style.borderColor = "red";
                nevHint.style.color = "red";
                nevHint.innerText = "A vezetéknévnek és a keresztnévnek minimum 3, maximum 15 betűsnek kell lennie";
            } else {
                nevInput.style.borderColor = "";
                nevHint.innerText = "";
            }
            formState.validNev = result;
            formState.toggleSubmitBtn();
            break;
        case "kartya":
            const kartyaRegex = /^\d{4}(-| )\d{4}(-| )\d{4}(-| )\d{4}$/;
            result = kartyaRegex.test(kartyaInput.value);
                
            if (result === false) {
                kartyaInput.style.borderColor = "red";
                kartyaHint.style.color = "red";
                kartyaHint.innerText = "Bankkártya számnak 4x4 számból kell állnia Pl.: 1234 1234 1234 1234 VAGY 1234-1234-1234-1234";
            } else {
                kartyaInput.style.borderColor = "";
                kartyaHint.innerText = "";
            }
            formState.validKartya = result;
            formState.toggleSubmitBtn();
            break;


        default:
            break;
    }
}

const formState = {
    validUsername: false,
    validPassword: false,
    validEmail: false,
    validNev: false,
    validKartya: false,
    toggleSubmitBtn: function () {
        if (this.validUsername && this.validPassword && this.validEmail && this.validNev && this.validKartya) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }
};

formState.toggleSubmitBtn();

usernameInput.addEventListener("input", () => {
    validateInput("username");
});

passwordInput.addEventListener("input", () => {
    validateInput("password");
});

emailInput.addEventListener("input", () => {
    validateInput("email");
});

nevInput.addEventListener("input", () => {
    validateInput("nev");
});

kartyaInput.addEventListener("input", () => {
    validateInput("kartya");
});

function kartyaszam() {
    kartyaInput.value = kartyaInput.value.replaceAll('-', '');
    kartyaInput.value = kartyaInput.value.replaceAll(' ', '');
};