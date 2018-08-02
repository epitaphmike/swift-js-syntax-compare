function makeIncrementer() {
    let addOne = number => 1 + number;
    return addOne;
}
let increment = makeIncrementer();
increment(7);
