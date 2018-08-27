# javascript 

JS实现页面分享代码share，不需要第三方接口
在开发一个页面的时候常常会有这么一个小功能，就是分享该页面中的信息。
常见的分享代码有百度分享， JiaThis分享插件，bshare分享插件等，我主要分享一下自定义分享代码，如下：
functiondofristshare(type) {
    var title = encodeURIComponent("新年快乐,马年吉祥");
    var link = encodeURIComponent('http://www.baidu.com');
    var image = encodeURIComponent('http://www.baidu.com/img/bdlogo.gif');

    if (type == "sina") {
        window.open("http://v.t.sina.com.cn/share/share.php?url=" + link + "&title=" + title + "&content=utf8&pic=" + image);
    }

    if (type == "tx") {
        window.open("http://v.t.qq.com/share/share.php?url=" + link + "&title=" + title + "&pic=" + image);
    }

    if (type == "qzone") {
        window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + link + "&title=" + title  + "&pics=" + image);
    }

    if (type == "rr") {
        window.open("http://widget.renren.com/dialog/share?resourceUrl=" + link + "&title=" + title  + "&pic=" + image);
    }

   if (type == "douban") {
        window.open("http://www.douban.com/recommend/?url=" + link + "&title=" + title + "&image=" + image);
    }

    return false;

}
 
htm代码：
<div class="share_top_style">
        <a href="javascript:void()"class=""onClick="dofristshare('sina')"><img src="images/sina.png"alt="新浪微博"></a>

        <a href="javascript:void()"class=""onClick="dofristshare('tx')"><img src="images/tx.png"alt="腾讯微博"></a>

        <a href="javascript:void()"class=""onClick="dofristshare('rr')"><img src="images/rr.png"alt="人人网"></a>

        <a href="javascript:void()"class=""onClick="dofristshare('qzone')"><img src="images/qq.png"alt="QQ空间"></a>

        <a href="javascript:void()"class=""onClick="dofristshare('douban')"><img src="images/db.png"alt="豆瓣"></a>
 </div>
 
