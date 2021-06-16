// Variables
const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");

// Functions
function res() {
    validation();
}

function validation() {
    const tMatch = parseFloat(document.querySelector("#tMatch").value);
    const tWr = parseFloat(document.querySelector("#tWr").value);
    const lsReq = parseFloat(document.querySelector("#lsReq").value);

    const totalNum = total(tMatch, tWr, lsReq);
    const minLoseNum = minLose(tMatch, tWr, lsReq);
    let text = "";

    if (isNaN(tMatch) || isNaN(tWr) || isNaN(lsReq)) {
        text = `Field harus diisi bro.`;
        display(text);
    } else if (lsReq % 1 != 0 || tMatch % 1 != 0) {
        text = `Field harus bilangan bulat`;
        display(text);
    } else if (tMatch < 0 || tWr < 0 || lsReq < 0) {
        text = `Field tidak boleh lebih kecil dari 0`;
        display(text);
    } else if (totalNum < 0) {
        text = `Minimal anda harus losestreak <b>${minLoseNum}</b> kali`;
        display(text);
    } else if (tWr > 100) {
        text = `WR tidak boleh lebih dari 100%`;
        display(text);
    } else {
        text = `Jika anda losestreak sebanyak <b>${lsReq}</b> kali, maka winrate anda menjadi <b>${totalNum}%</b>`;
        display(text);
    }
}

function display(text) {
    return resultText.innerHTML = text;
}

function total(tMatch, tWr, lsReq) {
    const win = Math.floor(tMatch * (tWr / 100) - lsReq) / tMatch * 100;
    return win.toFixed(1);
}

function minLose(tMatch, tWr) {
    return Math.ceil(tMatch * tWr / 100)
}

function updateVisitCount() {
    fetch("https://api.countapi.xyz/update/johsteven/ccac8049-f0da-408a-b6d7-8826b199afd0/?amount=1").then(res => res.json()).then(res => { console.log(res) });
}

// Main
window.addEventListener("load", init);

function init() {
    load();
    eventListener();
}

function load() {
    updateVisitCount();
    welcomeMsg();
}

function eventListener() {
    hasil.addEventListener("click", res);
}
