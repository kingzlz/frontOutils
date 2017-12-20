class Utils {
    // 获取滚动位置
    getScrollPos(el = window) {
        return ({
            x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
            y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
        });
    }

    /**
     *
     * @desc 判断元素是否有某个class
     * @param {HTMLElement} ele
     * @param {String} cls
     * @return {Boolean}
     */
    hasClass(ele, cls) {
        return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
    }

    /**
     *
     * @desc   为元素添加class
     * @param  {HTMLElement} ele
     * @param  {String} cls
     */
    addClass(ele, cls) {
        if (!this.hasClass(ele, cls)) {
            ele.className += ' ' + cls;
        }
    }

    /**
     *
     * @desc 为元素移除class
     * @param {HTMLElement} ele
     * @param {String} cls
     */
    removeClass(ele, cls) {
        if (this.hasClass(ele, cls)) {
            let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    }

    /**
     *
     * @desc   对象序列化
     * @param  {Object} obj
     * @return {String}
     */
    stringfyQueryString(obj) {
        if (!obj) return '';
        let pairs = [];

        for (let key in obj) {
            let value = obj[key];

            if (value instanceof Array) {
                for (let i = 0; i < value.length; ++i) {
                    pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
                }
                continue;
            }

            pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }

        return pairs.join('&');
    }

    // RGB到十六进制, rgbToHex(255, 165, 1) -> 'ffa501
    rgbToHex(r, g, b) {
        return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
    }

    /**
     * 滚动到顶部
     * 使用document.documentElement.scrollTop或document.body.scrollTop获取到顶部的距离。从顶部滚动一小部分距离。
     * 使用window.requestAnimationFrame（）来滚动。
     */

    scrollToTop() {

        const c = document.documentElement.scrollTop || document.body.scrollTop;

        if (c > 0) {

            window.requestAnimationFrame(scrollToTop);

            window.scrollTo(0, c - c / 8);

        }

    }

    /**
     *
     * @desc 获取滚动条距顶部的距离
     */
    getScrollTop() {
        return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    }

    /**
     *
     * @desc 设置滚动条距顶部的距离
     */
    setScrollTop(value) {
        window.scrollTo(0, value);
        return value;
    }

    /**
     *
     * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
     * @param {Number} to
     * @param {Number} duration
     */
    scrollTo(to, duration) {
        if (duration < 0) {
            this.setScrollTop(to);
            return
        }
        let diff = to - getScrollTop();
        if (diff === 0) return;
        let step = diff / duration * 10;
        requestAnimFrame(
            function () {
                if (Math.abs(step) > Math.abs(diff)) {
                    this.setScrollTop(this.getScrollTop() + diff);
                    return;
                }
                this.setScrollTop(this.getScrollTop() + step);
                if (diff > 0 && this.getScrollTop() >= to || diff < 0 && this.getScrollTop() <= to) {
                    return;
                }
                this.scrollTo(to, duration - 16);
            });
    }

    /**
     * UUID生成器
     * 使用crypto API生成符合RFC4122版本4的UUID
     *  uuid() -> '7982fcfe-5721-4632-bede-6000885be57d'
     * @returns {void|*|string}
     */
    uuid() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    /**
     * 验证数字
     * 使用！isNaN和parseFloat（）来检查参数是否是一个数字，使用isFinite（）来检查数字是否是有限的。
     * @param n
     * @returns {boolean}
     */
    validateNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n;
    }

    /**
     *
     * @desc 获取操作系统类型
     * @return {String}
     */
    getOS() {
        let userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
        let vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
        let appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

        if (/mac/i.test(appVersion)) return 'MacOSX';
        if (/win/i.test(appVersion)) return 'windows';
        if (/linux/i.test(appVersion)) return 'linux';
        if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios';
        if (/android/i.test(userAgent)) return 'android';
        if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
    }

    /**
     *
     * @desc 获取浏览器类型和版本
     * @return {String}
     */
    getExplore() {
        let sys = {},
            ua = navigator.userAgent.toLowerCase(),
            s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
            (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
                (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
                    (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
                        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
                            (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
                                (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
        // 根据关系进行判断
        if (sys.ie) return ('IE: ' + sys.ie);
        if (sys.edge) return ('EDGE: ' + sys.edge);
        if (sys.firefox) return ('Firefox: ' + sys.firefox);
        if (sys.chrome) return ('Chrome: ' + sys.chrome);
        if (sys.opera) return ('Opera: ' + sys.opera);
        if (sys.safari) return ('Safari: ' + sys.safari);
        return null;
    }

    /**
     *
     * @desc H5软键盘缩回、弹起回调
     * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
     * @param {Function} downCb 当软键盘弹起后，缩回的回调
     * @param {Function} upCb 当软键盘弹起的回调
     */

    windowResize(downCb, upCb) {
        let clientHeight = window.innerHeight;
        downCb = typeof downCb === 'function' ? downCb : function () {
        };
        upCb = typeof upCb === 'function' ? upCb : function () {
        };
        window.addEventListener('resize', () => {
            let height = window.innerHeight;
            if (height === clientHeight) {
                downCb();
            }
            if (height < clientHeight) {
                upCb();
            }
        });
    }

    /**
     * @desc   函数节流。
     * 适用于限制`resize`和`scroll`等函数的调用频率
     *
     * @param  {Number}    delay          0 或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
     * @param  {Boolean}   noTrailing     可选，默认为false。
     *                                    如果noTrailing为true，当节流函数被调用，每过`delay`毫秒`callback`也将执行一次。
     *                                    如果noTrailing为false或者未传入，`callback`将在最后一次调用节流函数后再执行一次.
     *                                    （延迟`delay`毫秒之后，节流函数没有被调用,内部计数器会复位）
     * @param  {Function}  callback       延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
     *                                    执行去节流功能时，调用`callback`。
     * @param  {Boolean}   debounceMode   如果`debounceMode`为true，`clear`在`delay`ms后执行。
     *                                    如果debounceMode是false，`callback`在`delay` ms之后执行。
     *
     * @return {Function}  新的节流函数
     */
    throttle(delay, noTrailing, callback, debounceMode) {

        // After wrapper has stopped being called, this timeout ensures that
        // `callback` is executed at the proper times in `throttle` and `end`
        // debounce modes.
        let timeoutID;

        // Keep track of the last date `callback` was executed.
        let lastExec = 0;

        // `noTrailing` defaults to falsy.
        if (typeof noTrailing !== 'boolean') {
            debounceMode = callback;
            callback = noTrailing;
            noTrailing = undefined;
        }

        // The `wrapper` function encapsulates all of the throttling / debouncing
        // functionality and when executed will limit the rate at which `callback`
        // is executed.
        function wrapper() {

            let self = this;
            let elapsed = Number(new Date()) - lastExec;
            let args = arguments;

            // Execute `callback` and update the `lastExec` timestamp.
            function exec() {
                lastExec = Number(new Date());
                callback.apply(self, args);
            }

            // If `debounceMode` is true (at begin) this is used to clear the flag
            // to allow future `callback` executions.
            function clear() {
                timeoutID = undefined;
            }

            if (debounceMode && !timeoutID) {

                exec();
            }

            // Clear any existing timeout.
            if (timeoutID) {
                clearTimeout(timeoutID);
            }

            if (debounceMode === undefined && elapsed > delay) {

                exec();

            } else if (noTrailing !== true) {

                timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
            }

        }

        // Return the wrapper function.
        return wrapper;

    }

    /**
     * @desc 函数防抖
     * 与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，
     * 要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。
     * @example 适用场景：如在线编辑的自动存储防抖。
     * @param  {Number}   delay         0或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
     * @param  {Boolean}  atBegin       可选，默认为false。
     *                                  如果`atBegin`为false或未传入，回调函数则在第一次调用return的防抖函数后延迟指定毫秒调用。
     如果`atBegin`为true，回调函数则在第一次调用return的防抖函数时直接执行
     * @param  {Function} callback      延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
     *                                  执行去抖动功能时，，调用`callback`。
     *
     * @return {Function} 新的防抖函数。
     */
    debounce(delay, atBegin, callback) {
        return callback === undefined ? this.throttle(delay, atBegin, false) : this.throttle(delay, callback, atBegin !== false);
    }

    /**
     *
     * @desc   判断`obj`是否为空
     * @param  {Object} obj
     * @return {Boolean}
     */
    isEmptyObject(obj) {
        if (!obj || typeof obj !== 'object' || Array.isArray(obj))
            return false;
        return !Object.keys(obj).length;
    }

    /**
     *
     * @desc 判断浏览器是否支持webP格式图片
     * @return {Boolean}
     */
    isSupportWebP() {
        return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }


}

let requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();


let utils = new Utils();
module.exports = utils;