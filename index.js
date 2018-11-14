(function(){
// 1.调用选项卡
 tab();
//  2.动态创建元素
autoCreateImg();
// 监听点击按钮
login();
// 广告轮播
bannerAutoPlay();
})();

function bannerAutoPlay(){
    // 1.获取所有的li标签
    var lis=$("slider_banner").getElementsByTagName("li");
    var index=0;
    // 开始定时器
    setInterval(function(){
        // 改变透明度
        for(var i=0;i<lis.length;i++){
            var singerLi=lis[i];
            buffer(singerLi,{opcity:0}, null);
        }
        buffer(lis[index],{opcity:1},null);
        // 索引++
        index++;
        if(index===lis.length){
            index=0;
        }
    },2000)
}
function login(){
    $("login").onclick=function(){
        alert(1);
        $("mask").style.display="block";
        alert(1);
    }
    $("close_btn").onclick=function(){
        $("mask").style.display="none";
    }
}
function autoCreateImg(){
    // 1.数据
    var json=[
        {txt:'阿三地方的规划和技术文档个人发帖和',pic:'./img/2.jpg'},
        {txt:'阿三地方的规划和技术文档个人发帖和',pic:'./img/3.jpg'},
        {txt:'阿三地方的规划和技术文档个人发帖和',pic:'./img/4.jpg'},
        {txt:'阿三地方的规划和技术文档个人发帖和',pic:'./img/5.jpg'},
        {txt:'阿三地方的规划和技术文档个人发帖和',pic:'./img/6.jpg'},
        {txt:'阿三地方的规划和技术文档个人发帖和',pic:'./img/7.jpg'},
        {txt:'阿三地方的规划和技术文档个人发帖和',pic:'./img/8.jpg'},
        {txt:'阿三地方的规划和技术文档个人发帖和',pic:'./img/1.jpg'},
        {txt:'阿三地方的规划和技术文档个人发帖和',pic:'./img/10.jpg'},
        {txt:'阿三地方的规划和技术文档个人发帖和',pic:'./img/11.jpg'},
        {txt:'阿三地方的规划和技术文档个人发帖和',pic:'./img/12.jpg'},
        {txt:'阿三地方的规划和技术文档个人发帖和',pic:'./img/13.jpg'},
        {txt:'阿三地方的规划和技术文档个人发帖和',pic:'./img/14.jpg'}
    ],txt,str,pic;
    // 2.遍历
    for(i=0;i<30;i++){
        // 1.获取父标签的文本
        var str=$("dom_pull").innerHTML;
        // console.log(str);
        // 2，取出图片的地址和文字
        var txt=json[i].txt;
        var pic=json[i].pic;
        // 3.创建子标签
        var htmlStr="<div class='box'>"+
        "<div class='pic'>"+
        "<img src="+pic+" alt=''>"+
            "<div class='cover'></div>"+
        "</div>"+
        "<p>"+txt+"</p>"+
        "<div class='btn-box'>"+
            "<a href='' class='collect'>采集</a>"+
            "<a href='' class='like'>"+
                "<span class='heart'></span>"+
            "</a>"+
        "</div>"+
    "</div>";
    // 4.拼接
    str+=htmlStr;
    $("dom_pull").innerHTML=str;
    // 5.绑定事件
    var wrapBox=$("dom_pull").getElementsByClassName("box");
    var wrappic=$("dom_pull").getElementsByClassName("pic");
    for(j=0;j<wrapBox.length;j++){
        wrapBox[j].onmouseover=function(){
            this.childNodes[2].style.display="block";
        };
        wrapBox[j].onmouseout=function(){
            this.childNodes[2].style.display="none";
        };
        wrappic[j].onmouseover=function(){
            this.childNodes[1].style.display="block";
        };
        wrappic[j].onmouseout=function(){
            this.childNodes[1].style.display="none";
        };
    }
    }
}
function tab(){
    // 1.获取需要的标签
    var allLis=$("tab_header").getElementsByTagName("li");
    var doms=$("tab_content").getElementsByClassName("dom");
    var lastOne=0;
    // console.log(allLis,doms);
    // 2.遍历监听，用的排他函数
    for(i=0;i<allLis.length;i++){
        var li=allLis[i];
        (function(i){
            li.onmousedown=function(){
                //1.清除样式
                allLis[lastOne].className="";
                doms[lastOne].style.display="none";
                // 2.设置选中
                this.className="current"; 
                doms[i].style.display="block";
                // 3.赋值
                lastOne=i;
            }
        })(i);
    }
}
function $(id){
    return typeof id==="string"?document.getElementById(id):null;
}