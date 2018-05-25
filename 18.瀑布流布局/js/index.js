window.onload = function () {
    /*瀑布流布局*/
    waterFall('main','box');
    /*加载图片*/
    var timeout = 0;
    var timeout1 = 0;
    window.onscroll = function () {
        clearInterval(timeout);//清除定时器
        if(checkWillLoadImg()){
            /*创建数据*/
            var data = [
                {'src':'images/1.jpg'},
                {'src':'images/3.jpg'},
                {'src':'images/5.jpg'},
                {'src':'images/7.jpg'},
                {'src':'images/9.jpg'},
                {'src':'images/11.jpg'},
                {'src':'images/13.jpg'},
                {'src':'images/15.jpg'},
                {'src':'images/17.jpg'},
                {'src':'images/19.jpg'}
            ];
            /*设置定时器*/
            timeout = setTimeout(function () {
                for(var i=0;i<data.length;i++){
                    var div = document.createElement('div');
                    div.className = 'box';
                    $('main').appendChild(div);
                    var img = document.createElement('img');
                    img.src = data[i].src;
                    div.appendChild(img);
                }
                /*瀑布流布局*/
                waterFall('main','box');
            },2000);

        }
    }
    window.onresize = function () {
        clearTimeout(timeout1);
        alert(0);
        timeout1 = setTimeout(function () {
            waterFall('main','box');
        },1000)
    }
};
/*瀑布流布局*/
function waterFall(parent,child) {

    var main = $(parent);
    var box = document.getElementsByClassName(child);
    /*求出大盒子的宽度=每行小盒子相加*/
    var dew = document.documentElement.clientWidth;//获取文档的宽度
    var cols = parseInt(dew/box[0].offsetWidth);//获取每行的列数
    main.style.width =cols * box[0].offsetWidth + 'px';//设置大盒子的宽度
    main.style.margin = '0 auto';//大盒子居中

    /*获取第一行每个小盒子的高度*/
    var heightArr = [];
    for(var i=0;i<box.length;i++){
        var boxWidth = box[i].offsetWidth;
        var boxHeight = box[i].offsetHeight;
        /*小于列数的为第一行*/
        if(i<cols){
            heightArr.push(boxHeight);
        }else{
            /*遍历每个盒子放到数组中高度最小的下面*/
            box[i].style.position = 'absolute';//每个盒子绝对定位
            var minHeight = _minValue(heightArr);//获取数组中最小的值
            var minIndex = _minIndex(heightArr);//获取数组中最小的值的下标
            box[i].style.left = boxWidth * minIndex + 'px';//每个盒子的left等于盒子的宽度*数组最小值的下标;
            box[i].style.top = minHeight + 'px';//每个盒子的top等于数组中的最小值;
            /*更新数组中的最小值*/
            heightArr[minIndex] += boxHeight;
        }
    }
}
/*获取ID*/
function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}
/*获取数组中最小的值*/
function _minValue(arr) {
    var minIndex = 0;
    for (var i = 1; i <= arr.length; i++) {
        if (arr[minIndex] > arr[i]) {
            minIndex = i;
        }
    }
    return arr[minIndex];
}
/*获取数组中最小的值的下标*/
function _minIndex(arr) {
    var minIndex = 0;
    for (var i = 1; i <= arr.length; i++) {
        if (arr[minIndex] > arr[i]) {
            minIndex = i;
        }
    }
    return minIndex;
}
/*scroll兼容*/
function _scrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}
/*检测加载图片*/
function checkWillLoadImg() {
    var boxs = document.getElementsByClassName('box');
    var lastBox = boxs[boxs.length - 1];//最后的盒子
    var offsetTop = lastBox.offsetTop + lastBox.offsetHeight * 0.5;//最后个盒子与大盒子top加自身的一半
    var clientHeight = document.documentElement.clientHeight;//文档可视区域的高度
    // var scrollTop = _scrollTop();//往下滚动的距离
    /*往下滚动的距离*/
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    // return ((scrollTop+dch) >= offsetTop) ? true : false;
    if(scrollTop+clientHeight >= offsetTop){
        return true;
    }else {
        return false;
    }

}
