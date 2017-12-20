class MathTool {
    constructor() {
    }

    // 两点之间的距离
    distance(x0, y0, x1, y1) {
        return Math.hypot(x1 - x0, y1 - y0);
    }

    // 可以按数字整除
    // isDivisible(6,3) -> true
    isDivisible(dividend, divisor) {
        return dividend % divisor === 0;
    }

    // 偶数或奇数
    // isEven(3) -> false
    isEven(num) {
        return num % 2 === 0;
    }

    // 阶乘
    factorial(n) {
        return n <= 1 ? 1 : n * this.factorial(n - 1);
    }

    // 斐波那契数组生成器
    // fibonacci(5) -> [0,1,1,2,3]
    fibonacci(n) {
        return Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);
    }

    // 随机生成颜色
    randomColor() {
        return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
    }

    // 生成指定范围[min, max]的随机整数
    randomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // 范围内的随机数
    randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    // 最大公约数（GCD) gcd (8, 36) -> 4
    gcd(x, y) {
        return !y ? x : gcd(y, x % y);
    }
}

let mathTool = new MathTool();
module.exports = mathTool;
