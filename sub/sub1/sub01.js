  
var uAgent = navigator.userAgent.toLowerCase();
var mobilePhones = new Array('iphone','ipod','android','blackberry','windows ce',
'nokia','webos','opera mini','sonyericsson','opera mobi','iemobile');
for(var i=0;i<mobilePhones.length;i++)
if(uAgent.indexOf(mobilePhones[i]) != -1)
document.location="https://yce-meta-vc-mobile.netlify.app/sub/sub1/sub1_aboutus";


$(function () {
// var sec01Offset = $('.top_navi').offset();

//   $(window).scroll(function () {

//     if ($(document).scrollTop() > sec01Offset.top) {
//       $('.sec01').css({
//         'left': '0',
//       });
//     }  //sec01_scrollevent
//   });

  var sec02Offset = $('.sec01').offset();

  $(window).scroll(function () {

    if ($(document).scrollTop() > sec02Offset.top) {
      $('.sec02').css({
        'left': '0',
      });
    } //sec02_scrollevent
  });

  var sec04Offset = $('.sec03').offset();

  $(window).scroll(function () {

    if ($(document).scrollTop() > sec04Offset.top) {
      $('.sec04_cont').css({
        'left': '0',
      });
    } //sec03_scrollevent
  });

});