/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const showBtn = document.querySelector("#btn");
const message = document.querySelector("#message");
const output = document.querySelector("#output");

function getUsers() {
    fetch(ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                const user = data[i];
                createCard(user.login, user.avatar_url);
            }
        })
        .catch((error => alert("Oops! an error occurred.", error)));
}

function createCard(login, img) {
    const userContainer = document.createElement("div");
    const userImg = document.createElement("img");
    const userLogin = document.createElement("span");
    userContainer.classList.add("user-container");
    userImg.classList.add("user-img");

    output.append(userContainer);
    userContainer.append(userImg, userLogin);
    
    userImg.src = img;
    userLogin.textContent = login;
    userLogin.style.fontSize = "24px"
    output.style.gap = "48px";
}

showBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getUsers();
    message.remove();
});



