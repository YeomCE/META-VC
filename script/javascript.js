//juery

$(function () {
  $('.list_01').hover(function () {
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
    $('.list_show_01').addClass('hover');
    $('.list_show_01').siblings().removeClass('hover');
  });

  $('.list_02').hover(function () {
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
    $('.list_show_02').addClass('hover');
    $('.list_show_02').siblings().removeClass('hover');
  });

  $('.list_03').hover(function () {
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
    $('.list_show_03').addClass('hover');
    $('.list_show_03').siblings().removeClass('hover');
  });

  $('.list_04').hover(function () {
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
    $('.list_show_04').addClass('hover');
    $('.list_show_04').siblings().removeClass('hover');
  });

  $('.list_05').hover(function () {
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
    $('.list_show_05').addClass('hover');
    $('.list_show_05').siblings().removeClass('hover');
  });

  $('.list_06').hover(function () {
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
    $('.list_show_06').addClass('hover');
    $('.list_show_06').siblings().removeClass('hover');
  });

  $('.list_07').hover(function () {
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
    $('.list_show_07').addClass('hover');
    $('.list_show_07').siblings().removeClass('hover');
  });
  //hover_Sec02_technology


  var sec01Offset = $('.banner').offset();

  $(window).scroll(function () {

    if ($(document).scrollTop() > sec01Offset.top) {
      $('.sec01_cont').css({
        'left': '50%',
        'transform': 'translateX(-50%)'
      });
    } //sec01_scrollevent
  });

  var sec02Offset = $('.sec02').offset();

  $(window).scroll(function () {

    if ($(document).scrollTop() > sec02Offset.top) {
      $('.sec02_cont').css({
        'left': '50%',
        'transform': 'translateX(-50%)'
      });
    } //sec02_scrollevent
  });

  var sec03Offset = $('.sec03_list').offset();

  $(window).scroll(function () {

    if ($(document).scrollTop() > sec03Offset.top) {
      $('.sec04_cont').css({
        'left': '50%',
        'transform': 'translateX(-50%)'
      });
    } //sec03_scrollevent
  });
});

//BX_Slider
$(function () {
  $('.sec03_list').bxSlider({
    auto: true,
    pause: 3000,
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 380,
    skrinkItems: true,
    moveSlides: 1,
    slideMargin: 30,
    touchEnabled : (navigator.maxTouchPoints > 0)
  })
});

// Java Script
var f = document.form;

function frmcheck() {
  if ($('#on_text').val().length == 0) {
    alert("이름을 입력해주세요.");
    $('#on_text').focus();
    return false;
  }

  if ($('#on_phone').val().length == 0) {
    alert("전화번호를 입력해주세요.");
    $('#on_phone').focus();
    return false;
  }

  if ($('#on_email').val().length == 0) {
    alert("이메일을 입력해주세요.");
    $('#on_email').focus();
    return false;
  }

  if ($('#on_detail').val().length == 0) {
    alert("세부사항을 입력해주세요.");
    $('#on_detail').focus();
    return false;
  }

  f.submit();
}