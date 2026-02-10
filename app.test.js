const { add, sub } = require("./app");

describe("add", () => {
    test("should return the sum of two numbers", () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 5)).toBe(4);
    });
});

describe("sub", () => {
    test("should return the difference of two numbers", () => {
        expect(sub(1, 2)).toBe(-1);
        expect(sub(-1, 5)).toBe(-6);
    });
});