class CookieTool {
    constructor() {

    }

    /**
     *
     * @desc  设置Cookie
     * @param {String} name
     * @param {String} value
     * @param {Number} days
     */
    setCookie(name, value, days) {
        let date = new Date();
        date.setDate(date.getDate() + days);
        document.cookie = name + '=' + value + ';expires=' + date;
    }

    /**
     *
     * @desc 根据name删除cookie
     * @param  {String} name
     */
    removeCookie(name) {
        // 设置已过期，系统会立刻删除cookie
        this.setCookie(name, '1', -1);
    }

    /**
     *
     * @desc 根据name读取cookie
     * @param  {String} name
     * @return {String}
     */
    getCookie(name) {
        let arr = document.cookie.replace(/\s/g, "").split(';');
        for (let i = 0; i < arr.length; i++) {
            let tempArr = arr[i].split('=');
            if (tempArr[0] === name) {
                return decodeURIComponent(tempArr[1]);
            }
        }
        return '';
    }

}

let cookieTool = new CookieTool();
module.exports =cookieTool;
