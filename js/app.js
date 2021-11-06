// UI 
const logintoggle = document.querySelector(".logintoggle"),
    signtoggle = document.querySelector(".signtoggle");
const overLayer = document.querySelector(".overlayer-green");

const overlayerwhite = document.querySelector(".overlayer-white"),
    overlayerwhite2 = document.querySelector(".overlayer-white2");

const containerFirst = document.querySelector(".container-first"),
    continerSecond = document.querySelector(".container-second");

const signup = document.querySelectorAll(".signup"),
    login = document.querySelectorAll(".login");

const loginEye = document.querySelector(".login-eye"),
    eye = document.querySelector(".fa-eye"),
    eyeSlash = document.querySelector(".fa-eye-slash");
const loginPassword = document.querySelector("#loginPassword");

const signEye = document.querySelector(".sign-eye"),
    signeyei = document.querySelector(".signeyei"),
    signeyeSlashi = document.querySelector(".signeyeslashi");
const signPassword = document.querySelector("#signpassword");

// sign form 
signtoggle.addEventListener("click", () => {
    overLayer.classList.add("ani");
    overLayer.classList.remove("anirev");
    overlayerwhite.classList.add("active");
    overlayerwhite.classList.add("ani");
    overlayerwhite2.classList.remove("active");
    overlayerwhite2.classList.remove("ani");
    containerFirst.classList.add("sign");
    continerSecond.classList.add("sign");
    signup[0].style.display = "block";
    signup[1].style.display = "block";
    login[0].style.display = "none";
    login[1].style.display = "none";
});

// login form 
logintoggle.addEventListener("click", () => {
    overLayer.classList.remove("ani");
    overLayer.classList.add("anirev");
    overlayerwhite.classList.remove("active");
    overlayerwhite.classList.remove("ani");
    overlayerwhite2.classList.add("active");
    overlayerwhite2.classList.add("ani");
    containerFirst.classList.remove("sign");
    continerSecond.classList.remove("sign");
    signup[0].style.display = "none";
    signup[1].style.display = "none";
    login[0].style.display = "block";
    login[1].style.display = "block";
});


// logineye password input
loginEye.addEventListener("click", () => {
    if (eye.classList.contains("active")) {
        eye.classList.remove("active");
        eyeSlash.classList.add("active");
        loginPassword.setAttribute("type", "text");
    } else {
        eye.classList.add("active");
        eyeSlash.classList.remove("active");
        loginPassword.setAttribute("type", "password");
    }
})

// sign password input
signEye.addEventListener("click", () => {
    if (signeyei.classList.contains("active")) {
        signeyei.classList.remove("active");
        signeyeSlashi.classList.add("active");
        signPassword.setAttribute("type", "text");
    } else {
        signeyei.classList.add("active");
        signeyeSlashi.classList.remove("active");
        signPassword.setAttribute("type", "password");
    }
})