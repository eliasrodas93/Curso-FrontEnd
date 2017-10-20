let arr = [1, 2, 3];

console.log(arr.filter(function(item) {
    return item !== 1;
})); // [2, 3]

console.log(arr.filter(item => item !== 1)); // [2, 3]

console.log(arr.filter((item, index) => {
    let pepe = 1;
    return item !== 1;
})); // [2, 3]
