/**
 * @desc webpack打包入口文件
 */

const frontoutils = require('./dist/frontoutils.min');
const getKeyName = require('./src/keycode/getKeyName');
const regexpTool = require('./src/regexp/index');
const dateTool = require('./src/date/index');
const stringTool = require('./src/string/index');
const mathTool = require('./src/math/index');
const utils = require('./src/utils/index');
const arrayTool = require('./src/array/index');
const cookieTool = require('./src/cookie/index');

module.exports = {
    frontoutils,
    arrayTool,
    mathTool,
    utils,
    stringTool,
    cookieTool,
    regexpTool,
    dateTool,
    getKeyName
};
