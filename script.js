// Email Validation

function emailValidation(){
    var form = document.getElementById("form")
    var email = document.getElementById("email").value
    var text = document.getElementById("text")
    var pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

    if(email.match(pattern)){
         form.classList.add("valid")
         form.classList.remove("invalid")
         text.innerHTML = "You entered a valid email address"
         text.style.color = "white"
         text.style.padding = "0.5rem"
         text.style.background = "green"
         
    }else{
         form.classList.remove("valid")
         form.classList.add("invalid")
         text.innerHTML = "Please add valid email address"
         text.style.color = "white"
         text.style.padding = "0.5rem"
         text.style.background = "#ff0000"
    }
    if(email == ""){
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = ""
        text.style.color = "#00ff00"
    }
}

//Password Validation

function passwordValidation(){
    var form = document.getElementById("form")
    var password = document.getElementById("password").value
    var text1 = document.getElementById("text1")
    var pattern = "[0-9]"

    if(password.match(pattern) && password.length >= 6){
         form.classList.add("valid")
         form.classList.remove("invalid")
         text1.innerHTML = "Password is valid"
         text1.style.color = "white"
         text1.style.padding = "0.5rem"
         text1.style.background = "green"
         
    }else{
         form.classList.remove("valid")
         form.classList.add("invalid")
         text1.innerHTML = "Password must have a numeric value and contains more than 6 numbers"
         text1.style.color = "white"
         text1.style.padding = "0.5rem"
         text1.style.background = "#ff0000"
    }
    if(password == ""){
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text1.innerHTML = ""
        text1.style.color = "#00ff00"
    }
}