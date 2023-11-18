function updateNumber(number) {
    const initial = document.getElementById("main");
    const currentText = initial.textContent;
    const updatedText = currentText + number;
    initial.textContent = updatedText;
};

function clearNumber() {
    const number = document.getElementById("main");
    number.textContent = "";
};

function clearHistory() {

};

document.getElementById("one").addEventListener("click", function () {
    clearNumber();
    clearHistory();
});

document.getElementById("C").addEventListener("click", function () {
    clearNumber();
});

document.getElementById("one").addEventListener("click", function () {
    updateNumber(1);
});

document.getElementById("two").addEventListener("click", function () {
    updateNumber(2);
});

document.getElementById("three").addEventListener("click", function () {
    updateNumber(3);
});

document.getElementById("four").addEventListener("click", function () {
    updateNumber(4);
});

document.getElementById("five").addEventListener("click", function () {
    updateNumber(5);
});

document.getElementById("six").addEventListener("click", function () {
    updateNumber(6);
});

document.getElementById("seven").addEventListener("click", function () {
    updateNumber(7);
});

document.getElementById("eight").addEventListener("click", function () {
    updateNumber(8);
});

document.getElementById("nine").addEventListener("click", function () {
    updateNumber(9);
});

document.getElementById("zero").addEventListener("click", function () {
    updateNumber(0);
});
