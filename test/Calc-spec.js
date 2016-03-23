var Calc = require('../lib/Calc');

console.log("hi");

describe("Calc-spec", function () {
    it("plus", function (done) {
    	var calc = new Calc();
    	var c = calc.plus(2, 3);
    	done()
    });
    it("minus", function (done) {
    	var calc = new Calc();
    	var c = calc.minus(5, 3);
    	done();
    });
    it("mult", function (done) {
    	var calc = new Calc();
    	var c = calc.mult(2, 2);
    	done();
    });
});