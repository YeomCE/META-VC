  
var uAgent = navigator.userAgent.toLowerCase();
var mobilePhones = new Array('iphone','ipod','android','blackberry','windows ce',
'nokia','webos','opera mini','sonyericsson','opera mobi','iemobile');
for(var i=0;i<mobilePhones.length;i++)
if(uAgent.indexOf(mobilePhones[i]) != -1)
document.location="https://yce-meta-vc-mobile.netlify.app/sub/sub4/sub4_letstalk";



var f = document.form;

function fmcheck() {
  if ($('#on_text').val() === undefined) {
    alert("이름을 입력해주세요.");
    $('#on_text').focus();
    return false;
  }

  if ($('#on_phone').val() === undefined) {
    alert("전화번호를 입력해주세요.");
    $('#on_phone').focus();
    return false;
  }

  if ($('#on_email').val() === undefined) {
    alert("이메일을 입력해주세요.");
    $('#on_email').focus();
    return false;
  }

  if ($('#on_detail').val() === undefined) {
    alert("세부사항을 입력해주세요.");
    $('#on_detail').focus();
    return false;
  }

  f.submit();
}

$(function(){
  var sec01Offset = $('.top_navi').offset();

  $(window).scroll(function () {

    if ($(document).scrollTop() > sec01Offset.top) {
      $('.sec01').css({
        // 'right': '0',
        'opacity': '1',
      });
    }//sec01_scrollevent
  });
})