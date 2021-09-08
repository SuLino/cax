 window.onload=function() {
    var ebn = document.getElementById('span')
     document.getElementById('123').onclick=function (){
        ebn.innerHTML='<img src="./image/right.png" alt="" width="20" height="20" align="right">';
     }
}
var mm=function () {
    var ebn = document.getElementsByName('hobby');
    for (var i = 0; i < ebn.length; i++) {
        ebn[i].checked=true;
    }
}
 var ss=function () {
     var ebn = document.getElementsByName('hobby');
     for (var i = 0; i < ebn.length; i++) {
         ebn[i].checked=false;
     }
 }
 var nn=function () {
     var ebn = document.getElementsByName('hobby');
     for (var i = 0; i < ebn.length; i++) {
         ebn[i].checked=!ebn[i].checked;

     }
 }