var signName = document.querySelector("#signName")
var signEmail = document.querySelector("#signEmail")
var signPassword = document.querySelector("#signPassword")
var signUpbtn = document.querySelector("#signUpbtn")
var signInbtn = document.querySelector("#signInbtn")
var signUp = document.querySelector("#signUp")
var signIn = document.querySelector("#signIn")
var parain = document.querySelector("#parain")
var paraup = document.querySelector("#paraup")
var errorName = document.querySelector("#errorName")
var errorEmail = document.querySelector("#errorEmail")
var errorPassword = document.querySelector("#errorPassword")
var errorNameUsed= document.querySelector("#errorNameUsed")
var errorMailUsed=document.querySelector("#errorMailUsed")
var paraError= document.querySelector("#paraError")
var check= document.querySelector("#check")
var signArr = []
if (window.localStorage.getItem("dataLogin")) {
    signArr = JSON.parse(window.localStorage.getItem("dataLogin"))
}
function signUpfinal() {
    if (validUser()===true && validEmail()===true && validPass()===true  ){
        if (enterUser()===true && enterEmail()===true ){
            var signPerson = {
                name: signName.value,
                mail: signEmail.value,
                pass: signPassword.value,
            };
            signArr.push(signPerson);
            console.log(signArr);
            paraError.classList.replace("d-block","d-none")
            window.localStorage.setItem("dataLogin", JSON.stringify(signArr));
            clear();
            console.log(signArr)
            signinClick()
            errorNameUsed.classList.replace("d-block","d-none")
            paraError.classList.replace("d-block","d-none")
        }
        else if(enterUser()!==true){
            paraError.classList.replace("d-none","d-block")
            paraError.innerHTML="user name is used please enter another user name"
        }
        else if(enterEmail()!==true){
            paraError.classList.replace("d-none","d-block")
            paraError.innerHTML="user email is used please enter another user name"
        }
    }
    
}
function validSignin(){
    for(var i=0;i<signArr.length;i++){
        if(signArr[i].mail==signEmail.value && signArr[i].pass==signPassword.value){
            console.log(signArr[i].name)
            window.localStorage.setItem("userName",signArr[i].name)
            check.classList.replace("d-block","d-none")
            window.location.href=`../html/welcom.html`
            return true;
        }
    }
check.classList.replace("d-none","d-block")
return false;
}
signInbtn.addEventListener("click",validSignin)
function clear() {
    signName.value = ""
    signEmail.value = ""
    signPassword.value = ""
}
function signupClick() {
    signInbtn.classList.replace("d-block", "d-none")
    signUpbtn.classList.replace("d-none", "d-block")
    signName.classList.replace("d-none", "d-block")
    parain.classList.replace("d-none", "d-block")
    paraup.classList.replace("d-block", "d-none")
    clear()
}
function signinClick() {
    signInbtn.classList.replace("d-none", "d-block")
    signUpbtn.classList.replace("d-block", "d-none")
    signName.classList.replace("d-block", "d-none")
    parain.classList.replace("d-block", "d-none")
    paraup.classList.replace("d-none", "d-block")
    errorName.classList.replace("d-block", "d-none")
    clear()
}
function validUser() {
    var regexName = /^([A-Z][a-z]{3,10})(\s)?([A-Z]{1}[a-z]{3,10})?$/i
    if (regexName.test(signName.value)) {
        errorName.classList.replace("d-block", "d-none")
        return true
    } else {
        errorName.classList.replace("d-none", "d-block")
        return false
    }
}
function enterUser(){
    if (validUser()=== true){
        for(var i=0;i<signArr.length;i++){
            if(signArr[i].name==signName.value){
                errorNameUsed.classList.replace("d-block","d-none")
                return false
        }
    }
    errorNameUsed.classList.replace("d-none","d-block")
return true
}
}
signName.addEventListener("input",validUser)
function validEmail() {
    var regexEmail = /^\w{3,}.?\w{4,}?@(\w{3,}).(\w{3,})$/i
    if (regexEmail.test(signEmail.value)) {
        errorEmail.classList.replace("d-block", "d-none")
        return true
    } else {
        errorEmail.classList.replace("d-none", "d-block")
        return false
    }
}
function enterEmail(){
    if (validEmail()=== true){
        for(var i=0;i<signArr.length;i++){
            if(signArr[i].mail==signEmail.value){
                errorMailUsed.classList.replace("d-none","d-block")
                return false
            }
            }
            errorMailUsed.classList.replace("d-block","d-none")

                return true
        }
    }
signEmail.addEventListener("input",validEmail)
function validPass() {
    var regexPass = /^\d{6,10}[A-Z]{1}[a-z]{1}$/
    if (regexPass.test(signPassword.value)) {
        errorPassword.classList.replace("d-block", "d-none")
        return true
    } else {
        errorPassword.classList.replace("d-none", "d-block")
        return false
    }
}
signPassword.addEventListener("input",validPass)
signUpbtn.addEventListener("click", function () {
    signUpfinal()
})