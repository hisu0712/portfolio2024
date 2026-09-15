// popup-header
function setCookie( name, value, exDay ) {
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + exDay ); 
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function popupShow() {
    cookiedata = document.cookie;
    if (cookiedata.indexOf("popup=done") < 0){
        document.getElementById("popup-header").style.display = "block";
    } else {
        document.getElementById("popup-header").style.display = "none";
    }
}
function closePop() {
    if (document.getElementById("chkbox").checked){
        setCookie("popup", "done", 1);
    }
    document.getElementById("popup-header").style.display = "none";
}
popupShow();

// header
$(".header-bottom .nav-item").hover(function(){
    $(this).find(".sub-menu").addClass("on");
}, function(){
    $(".header-bottom .sub-menu").removeClass("on");
})

$("#header .btn-search a").on("click", function(el){
    el.preventDefault();
    $("#header .btn-search a").removeClass("on");
    $(this).siblings().addClass("on");
})

// header > search-wrapper
$("#header .btn-search .btn-open").on("click", function(){
    $("#header .btn-search .search-wrapper").addClass("on");
})
$("#header .btn-search .btn-close").on("click", function(){
    $("#header .btn-search .search-wrapper").removeClass("on");
})

$(".search-wrapper .search-cate .btn-cate").on("click", function(el){
    el.preventDefault();
    $(".search-wrapper .search-cate .cate-list").toggleClass("on");
})

// header > moblie
$("#header .header_mo .btn-allmenu").on("click", function(){
    $("body").addClass("hidden");
    $(".dimm").addClass("on");
    $(".header_mo_nav").addClass("on");
})

$(".dimm").on("click", function(){
    $("body").removeClass("hidden");
    $(".dimm").removeClass("on");
    $(".header_mo_nav").removeClass("on");
})

$(".header_mo_nav .nav-item > a").on("click", function(e){
    e.preventDefault();
    $(this).parent().siblings().find("a").removeClass("on");
    $(this).parent().siblings().find(".sub-menu").removeClass("on");
    $(this).toggleClass("on");
    $(this).siblings().toggleClass("on");
    $(".header_mo_nav .gnb .sub-menu .snb-list").removeClass("on");
})

$(".header_mo_nav .gnb .sub-menu > li:has(.snb-list) > a").on("click", function(e){
    e.preventDefault();
    $(this).parent().siblings().find("a").removeClass("on");
    $(this).parent().siblings().find(".snb-list").removeClass("on");
    $(this).toggleClass("on");
    $(this).siblings().toggleClass("on");
})

// sc-search
$(".sc-search .search-list").on("click", function(el){
    el.preventDefault();
    $(".sc-search .list-wrap .search-link-list").toggleClass("on");
})
 
// sc-visual
const boardSlide = new Swiper(".sc-visual .swiper", {
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".sc-visual .area-control .pagination",
        type: "fraction"
    },
    navigation: {
        prevEl: ".sc-visual .btn-prev",
        nextEl: ".sc-visual .btn-next"
    }
})
$(".sc-visual .btn-start").on("click", function(){
    boardSlide.autoplay.start();
})
$(".sc-visual .btn-stop").on("click", function(){
    boardSlide.autoplay.stop();
})

// sc-notice
$(".sc-notice .tab-list .title").on("click", function(el){
    el.preventDefault();
    
    var tabId = $(this).data("tab");
    $(".sc-notice .tab-list .title").removeClass("on");
    $(this).addClass("on");
    
    $(".sc-notice .tab-list .tab-cont").removeClass("on");
    $(tabId).addClass("on");
})

// sc-popup
const popupSlide = new Swiper(".sc-popup .swiper", {
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".sc-popup .pagination",
        type: "fraction"
    },
    navigation: {
        prevEl: ".sc-popup .btn-prev",
        nextEl: ".sc-popup .btn-next"
    },
    breakpoints: {
        820: { 
            slidesPerView: 1,
            spaceBetween: 0
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    }
})
$(".sc-popup .btn-stop").on("click", function(){
    popupSlide.autoplay.start();
})
$(".sc-popup .btn-start").on("click", function(){
    popupSlide.autoplay.stop();
})

$(".sc-popup .btn-start, .sc-popup .btn-stop").on("click", function(){
    $(".sc-popup .btn-auto button").removeClass("on");
    $(this).siblings().addClass("on");
})

// sc-menu
const menuSlide = new Swiper(".sc-menu .swiper", {
    slidesPerView: 'auto', 
    navigation: {
        prevEl: ".sc-menu .navigation .btn-prev", 
        nextEl: ".sc-menu .navigation .btn-next" 
    }
})

// sc-banner
const bannerSlide = new Swiper(".sc-banner .swiper", {
    loop: true,
    allowTouchMove: false,
    effect: "fade",
    autoplay: {
        delay: 4000
    }
})

// popup-slide
$(".btn-popup-all").on("click", function(){
    var Num = $(this).data("num");
    
    $(".popup-slide .popup-title h3").removeClass("on");
    $(".popup-title h3[data-popupTitle='" + Num + "']").addClass("on");
    $(".popup-slide .popup-content ul").removeClass("on");
    $(".popup-slide .popup-content ul[data-popupContent='" + Num + "']").addClass("on");
    $(".popup-slide").addClass("on");
})
$(".popup-slide .popup-slide-close").on("click", function(){
    $(".popup-slide").removeClass("on");
})

// 챗봇
$(".chatbot-wrapper .chatbot-close").on("click", function(){
    $(".chatbot-wrapper").addClass("off");
})

// 웹 접근성
$("#header .gnb .nav-item > a").keydown(function(){
    $("#header .gnb .sub-menu").removeClass("on");
    $(this).siblings(".sub-menu").addClass("on");
})
$("#header .gnb .nav-item > a").keydown(function(e){
    if (e.keyCode == 9 && e.shiftKey) {
        $("#header .gnb .sub-menu").removeClass("on");
    }
})
$("#header .sub-menu .sub-menu-left").keydown(function(e){
    if (e.keyCode == 9 && e.shiftKey) {
        $("#header .gnb .sub-menu").removeClass("on");
    }
})
