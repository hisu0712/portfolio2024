const visualSlide = new Swiper(".visual-slide", {
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el:".pagination"
    },
})

const BestMenuSwiper = new Swiper(".swiper-best-menu", {
    slidesPerView: "auto",
    spaceBetween: 10
})

const bannerSlide = new Swiper(".banner-slide", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el:".pagination",
        type: "fraction",
    }
})

const topBanner = new Swiper(".top-banner-swiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    }
})

const recommendSlide = new Swiper(".recommend-slide", {
    pagination: {
        el:".pagination",
    }
})

const boardSlide = new Swiper(".board-slide", {
    slidesPerView: 2.2,
    spaceBetween: 10
})

//gnb & quick
var lastScrollTop = 0;
$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();

    if(scrollTop == 0) {
        $(".group-header").removeClass("fixed")
        $("header .gnb").removeClass("on");
        $("header .util-area, header .logo").css("filter", "invert(0%)");
    } else {
        $(".group-header").addClass("fixed")
        $("header .gnb").addClass("on");
        $("header .util-area, header .logo").css("filter", "invert(100%)");
    }

    if(scrollTop > lastScrollTop) {
        $(".quick").addClass("on");
    } else {
        $(".quick").removeClass("on");
    }
    lastScrollTop = scrollTop;
})

$(".quick .up button").on("click", function(){
    $("html, body").animate({scrollTop:0}, 900);
})

$(".gnb .btn-open").on("click", function(){
    var activeEl = $(".gnb-wrapper > *.active");

    activeEl.removeClass("active").siblings().addClass("active");
    $(".gnb-all-menu").slideToggle();
})

// 검색
$("#header .search").on("click", function(){
    $("#header .popup-search").addClass("on");
    $("body").addClass("hidden");
})
$(".popup-search .popup-close").on("click", function(){
    $("#header .popup-search").removeClass("on");
    $("body").removeClass("hidden");
})

// aside 메뉴
$(".menu").click(function(){
    $(".snb").addClass("on");
    $("body").addClass("hidden");
})
$(".btn-close,.dimmed").click(function(){
    $(".snb").removeClass("on");
    $("body").removeClass("hidden");
})
// aside 서브 메뉴
$(".snb .title").click(function(e){
    e.preventDefault();

    $(this).toggleClass("on").siblings().stop().slideToggle();
})

// sc-best_item
$(".sc-best_item .tab-item").on("click", function(el){
    el.preventDefault();

    $(this).addClass("on").siblings().removeClass("on");
    var contId = $(this).data("tab");
    $(contId).addClass("active").siblings().removeClass("active");
})

// review-popup 
$(".prd-item .review").on("click", function(el){
    el.preventDefault();
    $(".review-popup").addClass("on");
    $("body").addClass("hidden");
})
$(".review-popup .popup-close").on("click", function(){
    $(".review-popup").removeClass("on");
    $("body").removeClass("hidden");
})