const form = document.getElementById("formSection");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const formAlert = document.querySelector(".formAlert");
const formAlertText = document.querySelector(".formAlertText");

let isValid = false;
let isPasswordMatched = false;

function validateForm(){
    isValid = form.checkValidity()
    
    if(isValid === false){
        formAlertText.textContent = "Lütfen formu eksiksiz doldurunuz!"
        formAlertText.style.color = "red";
        formAlert.style.border = "1px solid red";
        return;
    }

    if(password.value === repassword.value){

        isPasswordMatched = true;
        
        password.style.borderColor = "green";
        repassword.style.borderColor = "green";
        

    }
    else {
        isPasswordMatched = false;
        formAlertText.textContent = "Şifreler eşleşmiyor!"
        formAlertText.style.color = "red";
        formAlert.style.border = "1px solid red";
        password.style.borderColor = "red";
        repassword.style.borderColor = "red";
        return;

    }

    if (isPasswordMatched && isValid){
        formAlertText.textContent = "Kayıt işlemi başarılı!"
        formAlertText.style.color = "green";
        formAlert.style.border = "1px solid green";
    }
}


function handleSubmit(e){
    e.preventDefault();
    validateForm();
}


form.addEventListener("submit",handleSubmit);