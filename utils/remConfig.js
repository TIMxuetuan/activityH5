// export default function() {
//   // var devicePixelRatio = 1;
//   // var scale = 1 / devicePixelRatio;
//   // document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
//   // 7.5根据设计稿的横向分辨率/100得来
//   // alert(document.documentElement.clientWidth)
//   var deviceWidth = document.documentElement.clientWidth;
//   console.log(deviceWidth)
//   // var deviceWidth = window.screen.availWidth
//   // alert(navigator.userAgent)
//   // alert(deviceWidth)
//   // console.log(navigator.userAgent)
//   if(deviceWidth > 750) {
//       // deviceWidth = 750;
//       deviceWidth = 7.5 * 50;
//   }

//   document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';


//   // //      用原生方法获取用户设置的浏览器的字体大小(兼容ie)
//   //     var doc=document,win=window
//   //     if(doc.documentElement.currentStyle) {
//   //         var user_webset_font=doc.documentElement.currentStyle['fontSize'];
//   //     }
//   //     else {
//   //         var user_webset_font=getComputedStyle(doc.documentElement,false)['fontSize'];
//   //     }
//   // //      取整后与默认16px的比例系数
//   //     var xs=parseFloat(user_webset_font)/16;
//   // //      设置rem的js设置的字体大小
//   //     var view_jsset_font,result_font;
//   //     var docEl = doc.documentElement,
//   //     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//   //     clientWidth,
//   //     recalc = function() {
//   //         clientWidth = docEl.clientWidth;
//   //         if(!clientWidth) return;
//   //         if(!doc.addEventListener) return;
//   //         if(clientWidth<750){
//   // //              设置rem的js设置的字体大小
//   //             view_jsset_font=100 * (clientWidth / 750);
//   // //              最终的字体大小为rem字体/系数
//   //             result_font=view_jsset_font/xs;
//   // //              设置根字体大小
//   //             docEl.style.fontSize = result_font + 'px';
//   //             }
//   //         else{
//   //             docEl.style.fontSize = 100 + 'px';
//   //             }
//   //     };
//   // win.addEventListener(resizeEvt, recalc, false);
//   // doc.addEventListener('DOMContentLoaded', recalc, false);

//   // 禁止双击放大
//   document.documentElement.addEventListener('touchstart', function (event) {
//       if (event.touches.length > 1) {
//           event.preventDefault();
//       }
//   }, false);
//   var lastTouchEnd = 0;
//   document.documentElement.addEventListener('touchend', function (event) {
//       var now = Date.now();
//       if (now - lastTouchEnd <= 300) {
//           event.preventDefault();
//       }
//       lastTouchEnd = now;
//   }, false);
// }

const baseSize = 32
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 750
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}