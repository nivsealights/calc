module.exports = function Calc() {

    this.plus = function plus(a, b) {
        return a+b;
    }

    this.minus = function minus(a, b) {
        return a-b;
    }

    this.mult = function mult(a, b) {
        return a*b;
    }

    this.div = function div(a, b) {
        return a/b;
    }
};
