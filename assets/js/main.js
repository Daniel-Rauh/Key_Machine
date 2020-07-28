const bigDis = document.getElementById("bigCode")
const keyDis = document.getElementById("key")
const codeDis = document.getElementById("code")
const keyCodeDis = document.getElementById("keyCode")
document.addEventListener("keypress", (event) => displayKey(event))
function displayKey() {
    let key = event.key
    let code = event.code
    let keyCode = event.keyCode
    codeDis.innerHTML = code
    keyDis.innerHTML = key
    bigDis.innerHTML = keyCode
    keyCodeDis.innerHTML = keyCode
}