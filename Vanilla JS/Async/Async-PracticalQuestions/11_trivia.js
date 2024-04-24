// what would get printed here in what order and why ?


setTimeout(() => {
    console.log(2);
});
console.log(1);
Promise.resolve().then(() => {
    console.log(3);
});
Promise.resolve().then(() => {
    setTimeout(() => {
        console.log(5);
    })
})
Promise.resolve().then(() => {
    console.log(4);
});
Promise.resolve().then(() => {
    setTimeout(() => {
        console.log(6);
    })
})
console.log(7);