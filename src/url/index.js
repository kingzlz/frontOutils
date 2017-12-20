class UrlToll {
    constructor() {
    }

    // 当前URL
    currentUrl() {
        return window.location.href;
    }

    /**
     * @desc  url参数转对象
     * @param  {String} url  default: window.location.href
     * @return {Object}
     */
    parseQueryString(url) {
        url = url == null ? window.location.href : url;
        let search = url.substring(url.lastIndexOf('?') + 1);
        if (!search) {
            return {}
        }
        return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    }

    /**
     * 重定向到URL
     * 使用window.location.href或window.location.replace（）重定向到url。 传递第二个参数来模拟链接点击（true - default）或HTTP重定向（false）。
     * redirect('https://google.com')
     */

    redirect(url, asLink = true) {
        return asLink ? window.location.href = url : window.location.replace(url);
    }

    /**
     * url参数转对象
     * 使用match() 与适当的正则表达式来获得所有键值对，适当的map() 。使用Object.assign（）和spread运算符（...）
     * 将所有键值对组合到一个对象中，将location.search作为参数传递给当前url。
     * @param url
     * @returns {{}}
     */
    getUrlParameters(url) {
        return url.match(/([^?=&]+)(=([^&]*))/g).reduce(
            (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
        );
    }


}

let urlTool = new UrlToll();
module.exports = urlTool;
