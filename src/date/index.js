/**
 * 时间相关tool
 */
class DateTool {
    constructor() {
    }

    /**
     * @desc   格式化${startTime}距现在的已过时间
     * @param  {Date} startTime
     * @return {String}
     */
    formatPassTime(startTime) {
        let currentTime = Date.parse(new Date()),
            time = currentTime - startTime,
            day = parseInt(time / (1000 * 60 * 60 * 24)),
            hour = parseInt(time / (1000 * 60 * 60)),
            min = parseInt(time / (1000 * 60)),
            month = parseInt(day / 30),
            year = parseInt(month / 12);
        if (year) return year + "年前";
        if (month) return month + "个月前";
        if (day) return day + "天前";
        if (hour) return hour + "小时前";
        if (min) return min + "分钟前";
        else return '刚刚'
    }

    /**
     *
     * @desc   格式化现在距${endTime}的剩余时间
     * @param  {Date} endTime
     * @return {String}
     */
    formatRemainTime(endTime) {
        let startDate = new Date(); //开始时间
        let endDate = new Date(endTime); //结束时间
        let t = endDate.getTime() - startDate.getTime(); //时间差
        let d = 0,
            h = 0,
            m = 0,
            s = 0;
        if (t >= 0) {
            d = Math.floor(t / 1000 / 3600 / 24);
            h = Math.floor(t / 1000 / 60 / 60 % 24);
            m = Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 % 60);
        }
        return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
    }

    /** * 对日期进行格式化，
     * @param date 要格式化的日期
     * @param format 进行格式化的模式字符串
     *     支持的模式字母有：
     *     y:年,
     *     M:年中的月份(1-12),
     *     d:月份中的天(1-31),
     *     h:小时(0-23),
     *     m:分(0-59),
     *     s:秒(0-59),
     *     S:毫秒(0-999),
     *     q:季度(1-4)
     * @return String
     * @author yanis.wang@gmail.com
     *     使用方法：
     *dateFormat('yyyy-MM-dd hh:mm:ss');
     *dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss');
     */
    dateFormat(date, format) {
        if (format === undefined) {
            format = date;
            date = new Date();
        }
        let map = {
            "M": date.getMonth() + 1, //月份
            "d": date.getDate(), //日
            "h": date.getHours(), //小时
            "m": date.getMinutes(), //分
            "s": date.getSeconds(), //秒
            "q": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
            let v = map[t];
            if (v !== undefined) {
                if (all.length > 1) {
                    v = '0' + v;
                    v = v.substr(v.length - 2);
                }
                return v;
            }
            else if (t === 'y') {
                return (date.getFullYear() + '').substr(4 - all.length);
            }
            return all;
        });
        return format;
    }


}

let dateTool = new DateTool();
module.exports = dateTool;
