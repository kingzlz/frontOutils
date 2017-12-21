# frontoutils
[![npm](https://img.shields.io/npm/v/outils.svg)](https://www.npmjs.com/package/frontoutils)
[![Coverage](https://coveralls.io/repos/github/kingzlz/frontOutils/badge.svg?branch=master) 
![LICENSE MIT](https://img.shields.io/npm/l/frontOutils.svg)](https://www.npmjs.com/package/frontoutils)

 
前端业务代码工具库  

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

## 安装使用

1. 直接下载`dist`目录下的[frontoutils.min.js]使用，支持UMD通用模块规范
2. 使用npm安装

### 浏览器:
``` html
  <script src="frontoutils.min.js"></script>
  <script>
    // 想用哪个工具,直接定义
    var stringTool = frontoutils.stringTool;
    var utils = frontoutils.utils();

    console.log(utils.uuid());

  </script>
```

### npm:
``` bash
$ npm install --save-dev frontoutils
```

**推荐使用方法**  

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('outils/<方法名>')
import frontoutils from 'frontoutils';

console.log(frontoutils.utils.uuid());
或者
const xxxxTool = require('frontoutils').xxxxTool

const utils = require('frontoutils').utils
console.log(utils.uuid());

```
## API文档

### Array  
#### &emsp;&emsp;[arrayEqual]&emsp;&emsp;判断两个数组是否相等 
### Cookie 
#### &emsp;&emsp;[getCookie][getCookie]&emsp;&emsp;根据name读取Cookie  
#### &emsp;&emsp;[removeCookie][removeCookie]&emsp;&emsp;根据name删除Cookie
#### &emsp;&emsp;[setCookie][setCookie]&emsp;&emsp;添加Cookie 

### 通用工具  
#### &emsp;&emsp;[debounce]&emsp;&emsp;函数防抖   
#### &emsp;&emsp;[throttle]&emsp;&emsp;函数节流   
#### &emsp;&emsp;[getKeyName]&emsp;&emsp;根据keycode获得键名 

### Regexp  
#### &emsp;&emsp;[isEmail]&emsp;&emsp;判断是否为邮箱地址 
#### &emsp;&emsp;[isIdCard]&emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp;[isPhoneNum]&emsp;&emsp;判断是否为手机号  
#### &emsp;&emsp;[isUrl]&emsp;&emsp;判断是否为URL地址

### String  
#### &emsp;&emsp;[digitUppercase]&emsp;&emsp;现金额转大写


### Date


### Url
详情请到src里面看

