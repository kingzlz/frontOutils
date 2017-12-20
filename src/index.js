/**
 * @desc webpack打包入口文件
 */

const getKeyName = require('./keycode/getKeyName');

const regexpTool = require('./regexp/index');
const dateTool = require('./date/index');
const stringTool = require('./string/index');
const mathTool = require('./math/index');
const utils = require('./utils/index');
const arrayTool = require('./array/index');
const cookieTool = require('./cookie/index');

module.exports = {
    arrayTool,
    mathTool,
    utils,
    stringTool,
    cookieTool,
    regexpTool,
    dateTool,
    getKeyName
};
