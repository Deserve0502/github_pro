function iframeAdaptionPost(oCon,str) {
    document.addEventListener('DOMContentLoaded', function () {
        var Height =str + 'Height';
        var Width = str + 'Width';
        let width = oCon.clientWidth;
        let height = oCon.clientHeight;
        window.parent.postMessage([
            Height+height,
            Width+width,
            
        ]
            , '*')
    }, false)
    Height = null;
    Width = null;
}

function iframeAdaptionRecive(e){
   let height =  e.data[0].replace(/[^0-9]/ig,"");
   let width =  e.data[1].replace(/[^0-9]/ig,"");
   return height;
}





//  oframeId.style.height =height + 'px'
// oframeId.style.width = width + 'px';




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
function getLastTime(containArrDate) {
    containArrDate = containArrDate.replace("T", " ");
    containArrDate = containArrDate.substr(0, 19)
    containArrDate = containArrDate.split(/[- : \/]/);
    let startDate = Date.parse(new Date(containArrDate[0], containArrDate[1] - 1, containArrDate[2],
        containArrDate[3], containArrDate[4], containArrDate[5]));
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
                lastTime = timeFn[j] + '天前';
                break;
            } else if (j === 1) {
                lastTime = timeFn[j] + '小时前';
                break;
            } else {
                lastTime = timeFn[j] + '秒前';
                break;
            }

        }
    }
    return lastTime;
}