"use strict";
var obj = {
    name: 'jack',
    sex: 'male',
    age: 18
};
function pick(o, names) {
    return names.map(function (n) { return o[n]; });
}
pick(obj, ['name']);
var images = {
    src: 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    alt: '谷歌',
    width: 500
};
//# sourceMappingURL=type.js.map