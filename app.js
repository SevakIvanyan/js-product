function changeName(el) {
    const userOne = "Sevak";
    const userTwo = "Harut";
    if (el.value !== userOne) {
        el.value = userOne;
    } else {
        el.value = userTwo;
    }
}
