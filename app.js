function changeName(el) {
    const userOne = "Sevak";
    const userTwo = "Harut";
    if (el.value != userOne) {
        el.value = userOne;
    } else {
        el.value = userTwo;
    }
};

function myFunctionOne() {
    const x = document.getElementById("myDivTwo");
    const v = document.getElementById("myDivOne")
    v.style.display = "none"
    if (x.style.display != "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function myFunctionTwo() {
    const y = document.getElementById("myDivOne");
    const z = document.getElementById("myDivTwo")
    z.style.display = "none"
    if (y.style.display != "block") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }

};


