/**
 *
 * @desc   string tool
 * @param  {Number} n
 * @return {String}
 */
class StringTool {
    constructor() {
    }

    // Anagrams of string（带有重复项）
    // anagrams('abc') -> ['abc','acb','bac','bca','cab','cba']
    anagrams(str) {
        if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
        return str.split('').reduce((acc, letter, i) =>
            acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
    };

    // 现金额转大写
    digitUppercase(n) {
        let fraction = ['角', '分'];
        let digit = [
            '零', '壹', '贰', '叁', '肆',
            '伍', '陆', '柒', '捌', '玖'
        ];
        let unit = [
            ['元', '万', '亿'],
            ['', '拾', '佰', '仟']
        ];
        let head = n < 0 ? '欠' : '';
        n = Math.abs(n);
        let s = '';
        for (let i = 0; i < fraction.length; i++) {
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);
        for (let i = 0; i < unit[0].length && n > 0; i++) {
            let p = '';
            for (let j = 0; j < unit[1].length && n > 0; j++) {
                p = digit[n % 10] + unit[1][j] + p;
                n = Math.floor(n / 10);
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }
        return head + s.replace(/(零.)*零元/, '元')
            .replace(/(零.)+/g, '零')
            .replace(/^整$/, '零元整');
    }

    // 清除两边的空格
    trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }

    // 保留数字
    getNum(str) {
        let regEx = /[^\d]/g;
        return str.replace(regEx, '');
    }

    // 保留中文
    getCN(str) {
        let regEx = /[^\u4e00-\u9fa5\uf900-\ufa2d]/g;
        return str.replace(regEx, '')
    }

    // String转化为Number
    toInt(str) {
        return isNaN(parseInt(str)) ? str.toString() : parseInt(str);
    }

    // 得到字节长度
    getStringsLen(str) {
        let regEx = /^[\u4e00-\u9fa5\uf900-\ufa2d]+$/;
        if (regEx.test(str)) {
            return str.length * 2;
        } else {
            let oMatches = str.match(/[\x00-\xff]/g);
            return str.length * 2 - oMatches.length;
        }
    }

    // 大写每个单词的首字母
    // capitalizeEveryWord('hello world!') -> 'Hello World!'
    capitalizeEveryWord(str) {
        return str.replace(/\b[a-z]/g, char => char.toUpperCase());
    }

    // 首字母大写
    // capitalize('myName', true) -> 'Myname'
    capitalize(str, lowerRest = false) {
        return str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
    }

    // 一串字符串,首字母大写
    toCapitalize(str) {
        return str.replace(/\b\w/g, word => word.toUpperCase());
    }

    // 检查回文
    // palindrome('taco cat') -> true
    palindrome(str) {
        const s = str.toLowerCase().replace(/[\W_]/g, '');

        return s === s.split('').reverse().join('');
    }

    /**
     * 反转一个字符串
     * 使用数组解构和Array.reverse（）来颠倒字符串中的字符顺序。合并字符以使用join('')获取字符串。
     * reverseString('foobar') -> 'raboof'
     */
    reverseString(str) {
        return [...str].reverse().join('');
    }

    /**
     * 按字符串排序（按字母顺序排列）
     * 使用split（''）分割字符串，sort（）使用localeCompare（），使用join（''）重新组合。
     * sortCharactersInString('cabbage') -> 'aabbceg'
     * @param str
     * @returns {string}
     */
    sortCharactersInString(str) {
        return str.split('').sort((a, b) => a.localeCompare(b)).join('');
    }

    //格式化字符, size-每隔几个字符进行分割 默认3, delimiter-分割符 默认','
    formatText(str, size, delimiter) {
        let _str = str.toString();
        let _size = size || 3, _delimiter = delimiter || ',';
        let regText = '\\d{1,' + _size + '}(?=(\\d{' + _size + '})+$)';
        let reg = new RegExp(regText, 'g');

        return _str.replace(/^(-?)(\d+)((\.\d+)?)$/, function ($0, $1, $2, $3) {
            return $1 + $2.replace(reg, '$&,') + $3;
        })
    }

}

let stringTool = new StringTool();

module.exports = stringTool;