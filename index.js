const divide = function() {
    return 2000 / 100;
};

const square = (x) => {
    return x * x;
};

const add = (parameter1, parameter2) => parameter1 + parameter2;

const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2);

module.exports = {
    divide,
    square,
    add
};
