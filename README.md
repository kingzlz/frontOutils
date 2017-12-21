# frontoutils
 
前端开发业务常用代码工具库  

> 目的：高效率完成前端业务代码

在前端业务开发过程中，会经常要对数组,对象,字符串,日期等进行操作,为了方便整理了一些类似`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

## 安装使用

1. 直接下载`dist`目录下的[frontoutils.min.js]使用，支持UMD通用模块规范
2. 使用npm安装

### 浏览器:
``` html
  <script src="frontoutils.min.js"></script>
  <script>
    // 想用哪个工具,直接定义
    var stringTool = frontoutils.stringTool;
    var utils = frontoutils.utils;

    console.log(utils.uuid());

  </script>
```

### npm:
``` bash
$ npm install --save-dev frontoutils
```

**推荐使用方法**  

在项目中可直接import or require
``` javascript
// import  or  require
import frontoutils from 'frontoutils';

console.log(frontoutils.utils.uuid());
或者
const xxxxTool = require('frontoutils').xxxxTool

const utils = require('frontoutils').utils
console.log(utils.uuid());

```
## API文档

### Array  
#### [arrayEqual]判断两个数组是否相等 
### Cookie 
#### [getCookie]根据name读取Cookie  
#### [removeCookie]根据name删除Cookie
#### [setCookie]添加Cookie 

### 通用工具  
#### [debounce]函数防抖   
#### [throttle]函数节流   
#### [getKeyName]根据keycode获得键名 

### Regexp  
#### [isEmail]判断是否为邮箱地址 
#### [isIdCard]判断是否为身份证号
#### [isPhoneNum]判断是否为手机号  
#### [isUrl]判断是否为URL地址

### String  
#### [digitUppercase]现金额转大写


### Date


### Url
详情请到src里面看

