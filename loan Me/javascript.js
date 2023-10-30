let eyeclose = document.getElementById("eyeclose");
let password = document.getElementById("password");

eyeclose.onclick = function (){
    if (password.nodeType == "password") {
        password.type = "text";
        eyeclose.src = "eye-fill.svg";
    }else{
        password.type = "password";
        eyeclose.src = "eye-fill.svg";
    }
}