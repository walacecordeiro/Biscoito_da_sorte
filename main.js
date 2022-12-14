// variables
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")

const closedCookie = document.querySelector("#closedCookie")
const btnReset = document.querySelector("#btnReset")

// events

closedCookie.addEventListener('click', changeScreen)
btnReset.addEventListener('click', changeScreen)


// calback functions

function changeScreen(){
    screenOne.classList.toggle("hide")
    screenTwo.classList.toggle("hide")
}