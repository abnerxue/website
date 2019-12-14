// 让标题栏滚动
// var text = document.title;
// var timerId;
// function newText(){
//     clearTimeout(timerId);
//     document.title = text.substring(1,text.length) + text.substring(0,1);
//     text = document.title.substring(0,text.length);
//     timerId = setTimeout("newText()",500);
// }
// 让标题栏滚动2
setInterval(function(){
    //获得页面标题, 是 string 类型
    var oldTitle=document.title;
    //转换为数组类型
    var titleArr=oldTitle.split('');
    //使标题的字符产生位置的变化
    titleArr.push(titleArr.shift());
    //连接为字符串
    document.title=titleArr.join('');
},500);