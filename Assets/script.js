var previous = "";
var type = "";
var total = 0;

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
   previous = ""; 
};

function storeNumber() {
    previous = Number(document.getElementById("main").textContent);
}

document.getElementById("AC").addEventListener("click", function () {
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

document.getElementById("period").addEventListener("click", function () {
    updateNumnber(".");
})

document.getElementById("multiplication").addEventListener("click", function () {
    previous = document.getElementById("main").textContent
    if (previous != "") {
        storeNumber();
        console.log(previous);
        clearNumber();
        type = "multiplication";
    } else {
        updateNumber("Error");
    }
});

document.getElementById("addition").addEventListener("click", function () {
    previous = document.getElementById("main").textContent
    if (previous != "") {
        storeNumber();
        console.log(previous);
        clearNumber();
        type = "addition";
    } else {
        updateNumber("Error");
    }
});

document.getElementById("subtraction").addEventListener("click", function () {
    previous = document.getElementById("main").textContent
    if (previous != "") {
        storeNumber();
        console.log(previous);
        clearNumber();
        type = "subtraction";
    } else {
        updateNumber("Error");
    }
});

document.getElementById("division").addEventListener("click", function () {
    previous = document.getElementById("main").textContent
    if (previous != "") {
        storeNumber();
        console.log(previous);
        clearNumber();
        type = "division";
    } else {
        updateNumber("Error! Cannot divide by 0");
    }
});

document.getElementById("equal").addEventListener("click", function () {
    const value = document.getElementById("main");
    const result = document.getElementById("result");
    var numberValue = Number(value.textContent);
    if (type === "multiplication") {
        total = previous * numberValue;
        result.textContent = total;
        clearHistory();
        clearNumber();
    } else if (type === "division" && numberValue != 0) {
        total = previous / numberValue;
        result.textContent = total;
        clearHistory();
        clearNumber();
    } else if (type === "addition") {
        total = previous + numberValue;
        result.textContent = total;
        clearHistory();
        clearNumber();
    } else if (type === "subtraction") {
        total = previous - numberValue;
        result.textContent = total;
        clearHistory();
        clearNumber();
    } else if (type === "division" && Number(numberValue) === 0) {
        value.textContent = "Error"
    }
})