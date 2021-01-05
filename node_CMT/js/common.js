/** 
 * ajax请求
*/
function ajax(json) {
    if (window.XMLHttpRequest) {
        var ajax = new XMLHttpRequest();
    }
    else {
        var ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (json.type == 'get') {
        ajax.open('get', json.url + '?' + JsonToString(json.data), true);
        ajax.send();
    }
    else if (json.type == 'post') {
        ajax.open('post', json.url, true);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send(JsonToString(json.data));
    }
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status >= 200 && ajax.status < 300 || ajax.status == 304) {
                json.success(ajax.responseText);
            }
            else {
                json.error && json.error();
            }
        };
    };
    function JsonToString(json) {
        var arr = [];
        for (var i in json) {
            arr.push(i + '=' + json[i]);
        };
        return arr.join('&');
    }
}

/**
  * 时间戳格式化
 */
function getLastTime(containArrDate) {
    containArrDate = containArrDate.replace("T", " ");
    containArrDate = containArrDate.substr(0, 19)
    containArrDate = containArrDate.split(/[- : \/]/);
    let startDate = Date.parse(new Date(containArrDate[0], containArrDate[1] - 1, containArrDate[2],containArrDate[3], containArrDate[4], containArrDate[5]));
    // 获取时间差值毫秒
    let dateDiff = new Date().getTime() - startDate;
    let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); 
    let leave1 = dateDiff % (24 * 3600 * 1000);
    let hours = Math.floor(leave1 / (3600 * 1000));
    let leave2 = leave1 % (3600 * 1000);
    let minutes = Math.floor(leave2 / (60 * 1000));
    let leave3 = leave2 % (60 * 1000);
    let seconds = Math.round(leave3 / 1000)
    let timeFn = dayDiff + "," + hours + "," + minutes + "," + seconds;
    timeFn = timeFn.split(",");
    let lastTime;
    for (let j = 0; j < timeFn.length; j++) {
        if (timeFn[j] !== '0') {
            if (j === 0) {
                if (parseInt(timeFn[j]/365) !== 0) {
                    lastTime = parseInt(timeFn[j]/365) + '年前';
                    break;
                }else {
                    lastTime = timeFn[j] + '天前';
                }
                
                break;
            }else if (j === 1) {
                lastTime = timeFn[j] + '小时前';
                break;
            }else {
                lastTime = timeFn[j] + '秒前';
                break;
            }

        }
    }
    return lastTime;
}

/**
 * iframe局部刷新
 */
function partRefresh() {
    ocontain.src = "../static/contain.html";
}

/**
 * 分页封装
 */
function getPagination(ul,li,lsPage,endPage){
    // 起始样式
    let startarr = ['«', '1', '2', '3', '4', '5', '...','»']; 
    // 结束样式
    let endarr =  ['«', '...', endPage-2, endPage-1, endPage,'»'];
    let arr = [];
    let str = '';
    // 自定义数组插入方法
    Array.prototype.insert = function (index, item) {
        this.splice(index, 0, item);
    };
    ls.setItem(lsPage,1)
    arr =  copyArr(startarr);
    buildPa();
    liclick();
    getPaColor();
    // 模版拼接按钮
    function buildPa() {
        for (let j = 0; j < arr.length; j++) {
            str += `
                <li>${arr[j]}</li>
            `
        }
        ul.innerHTML = str;
        str = '';
        li = document.querySelectorAll(".contain_pagination > li");
        liclick();
    }
    // 重建数组顺序
    function buildArr() {
        console.log(arr)
        let difference = -2;
        for (let i = 2; i < arr.length - 2; i++) {
            arr[i] = Number(ls.getItem(lsPage)) + Number(difference);
            difference++;
        }
    }
    // 点击按钮事件
    function liclick() {
        for (let i = 0; i < li.length; i++) {
            li[i].onclick = function () {
                ls.setItem(lsPage, li[i].innerHTML);
                if (li[i].innerHTML >= 4 && li[i].innerHTML <= endPage) {
                    if (ls.getItem(lsPage) == (endPage - 2)) {
                        buildArr();
                       arr =  copyArr(endarr);
                        arr.insert(2, endPage - 3);
                        arr.insert(2, endPage - 4);
                        buildPa();
                    } else if (ls.getItem(lsPage) == (endPage - 1)) {
                        buildArr();
                        arr =  copyArr(endarr);
                        arr.insert(2, endPage - 3);
                        buildPa();
                    } else if (ls.getItem(lsPage) == (endPage)) {
                        buildArr();
                        arr =  copyArr(endarr);
                        buildPa();
                    } else {
                        arr.insert(1, '...');
                        buildArr();
                        arr[7] = '...';
                        arr[8] = '»';
                        buildPa();
                        arr.splice(6, 1);
                    }
                } else if (li[i].innerHTML < 4) {
                    arr =  copyArr(startarr);
                    buildPa();
                }
                getPaColor();
                partRefresh();
            }
            li[0].onclick = function () {
                ls.setItem(lsPage, 1);
                arr =  copyArr(startarr);
                buildPa();
                li[1].style.color = '#80bd01';
                partRefresh();
            }
            li[arr.length - 1].onclick = function () {
                ls.setItem(lsPage, endPage);
                buildArr();
                arr =  copyArr(endarr);
                buildPa();
                li[4].style.color = '#80bd01';
                partRefresh();
            }
        }
    }
    // 点击按钮颜色变化
    function getPaColor() {
        for (let j = 0; j < li.length; j++) {
            li[j].style.color = '#999';
            if (li[j].innerText == ls.getItem(lsPage)) {
                li[j].style.color = '#80bd01'
            }
        }
    }
    // 深拷贝数组
    function copyArr(arr){
        let newarr = [];
        for(let i = 0;i < arr.length; i++){
            newarr.push(arr[i]);
        }
        return newarr;
    }

}

/**
 * 常量提取
 */
const PX = 'px';
let ls = localStorage;


