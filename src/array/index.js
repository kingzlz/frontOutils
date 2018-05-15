/**
 *
 * @desc 判断两个数组是否相等
 */
class ArrayTool {

    constructor() {
    }

    /**
     * 两个数组是否相等
     * @param arr1
     * @param arr2
     * @returns {boolean}
     */
    arrayEqual(arr1, arr2) {
        if (arr1 === arr2) return true;
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    // 数字数组由小到大排序
    min2Max(array) {
        let oValue;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j <= i; j++) {
                if (array[i] < array[j]) {
                    oValue = array[i];
                    array[i] = array[j];
                    array[j] = oValue;
                }
            }
        }
        return array;
    }

    // 数字数组由大到小排序
    max2Min(array) {
        let oValue;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j <= i; j++) {
                if (array[i] > array[j]) {
                    oValue = array[i];
                    array[i] = array[j];
                    array[j] = oValue;
                }
            }
        }
        return array;
    }


    // 数组平均数
    average(arr) {
        return arr.reduce((acc, val) => acc + val, 0) / arr.length;
    }

    // 计数数组中值的出现次数
    // countOccurrences([1,1,2,1,2,3], 1) -> 3
    countOccurrences(arr, value) {
        return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
    }

    // 数组之间的区别
    // difference([1,2,3], [1,2]) -> [3]
    difference(a, b) {
        const s = new Set(b);
        return a.filter(x => !s.has(x));
    }

    // 过滤数组中的非唯一值, filterNonUnique([1,2,2,3,4,4,5]) -> [1,3,5]
    filterNonUnique(arr) {
        return arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
    }

    // 多维数组变成一维数组(Flatten数组), flatten([1,[2],3,4]) -> [1,2,3,4]
    flatten(arr) {
        return arr.reduce((a, v) => a.concat(v), []);
    }

    // 从数组中获取最大值
    getArrayMax(arr) {
        return Math.max(...arr);
    }

    // 从数组中获取最小值
    getArrayMin(arr) {
        return Math.min(...arr);
    }

    // 用range初始化数组,  initializeArrayRange(5) -> [0,1,2,3,4]
    initializeArrayRange(end, start = 0) {
        return Array.apply(null, Array(end - start)).map((v, i) => i + start);
    }

    // 用值初始化数组,  initializeArray(5, 2) -> [2,2,2,2,2]
    initializeArray(n, value = 0) {
        return Array(n).fill(value);
    }

    // 来自键值对的对象, objectFromPairs([['a',1],['b',2]]) -> {a: 1, b: 2}
    objectFromPairs(arr) {
        return arr.reduce((a, v) => (a[v[0]] = v[1], a), {});
    }

    // 随机化数组的顺序, shuffle([1,2,3]) -> [2,3,1]
    shuffle(arr) {
        return arr.sort(() => Math.random() - 0.5);
    }

    /**
     * 数组之间的相似性
     * 使用filter（）移除不是values的一部分值，使用includes（）确定。
     * similarity([1,2,3], [1,2,4]) -> [1,2]
     * @param arr
     * @param values
     */
    similarity(arr, values) {
        return arr.filter(v => values.includes(v));
    }

    /**
     * 数组总和
     * 使用reduce（）将每个值添加到累加器，初始化值为0。
     * sum([1,2,3,4]) -> 10
     * @param arr
     */
    sum(arr) {
        return arr.reduce((acc, val) => acc + val, 0);
    }

    /**
     * 数组唯一值
     * 使用ES6 Set和... rest操作符去掉所有重复值。
     * unique([1,2,2,3,4,4,5]) -> [1,2,3,4,5]
     * @param arr
     * @returns {*[]}
     */
    unique(arr) {
        return [...new Set(arr)];
    }

    unique2(arr) {
        return Array.from(new Set(arr));
    }


}

let arrayTool = new ArrayTool();
module.exports = arrayTool;