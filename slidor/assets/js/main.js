// 스크롤(lenis 라이브러리)
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 600)
})

gsap.ticker.lagSmoothing(0)

// header 
$("#header .text-ani .text").each(function(){
    const cloneText = this.cloneNode(true);
    cloneText.classList.remove("text");
    cloneText.classList.add("clone-text");
    $(this).parent().append(cloneText);
})

gsap.set(".text-ani .clone-text", {yPercent: -100});

$("#header .nav-link").hover(function(){
    gsap.to($(this).find(".clone-text"), 
        {yPercent: 0, ease: "power3.inOut", duration: 0.4}
    );
    gsap.to($(this).find(".text"), 
        {yPercent: 100, ease: "power3.inOut", duration: 0.4}
    );
    $(this).find(".sub-menu").addClass("on");
    $(this).find(".sub-menu-bg").addClass("on");
}, function(){
    gsap.to($(this).find(".clone-text"), 
        {yPercent: -100, ease: "power3.inOut", duration: 0.3}
    );
    gsap.to($(this).find(".text"), 
        {yPercent: 0, ease: "power3.inOut", duration: 0.3}
    );
    $(this).find(".sub-menu").removeClass("on");
    $(this).find(".sub-menu-bg").removeClass("on");
});

// header > contact
$(window).scroll(function(){
    var currentScroll = $(this).scrollTop();

    if( currentScroll > 10 ) {
        $("#header .link-bg").addClass("on");
    } else {
        $("#header .link-bg").removeClass("on");
    }
})
// header > nav-link
$("#header .nav-menu.pc .main-menu-services.nav-link, #header .nav-menu.pc .main-menu-resources.nav-link").hover(
    function(){
        $(this).find(".icon-arrow").addClass("on");
        $("#header .dimmed").addClass("on");
    }, function(){
        $(this).find(".icon-arrow").removeClass("on");
        $("#header .dimmed").removeClass("on");
    }
);

// header > sub-menu
$("#header .main-menu-services .text-area").hover(
    function(){
        var contentImg = $(this).data('tab');
        $("#header .main-menu-services").find(contentImg).css("display", "block");
    }, function(){
        $("#header .main-menu-services #content1").css("display", "block");
        $("#header .main-menu-services .thumb-box > img").not("#content1").css("display", "none");
    }
);
$("#header .main-menu-resources .img-wrap").hover(
    function(){
        $(this).find("img").addClass("on");
    }, function(){
        $(this).find("img").removeClass("on");
    }
);

//header > call
$("#header .btn-call").click(function(){
    $("#header .popup-call").addClass("active");
})
$("#header .popup-call .btn-close").click(function(){
    $("#header .popup-call").removeClass("active");
})

// header > moblie
let menuHide = true;

$("#header .hamb-menu").on("click", function(){
    if(menuHide) {
        $(this).addClass("on");
        $("#header .nav-menu.moblie .main-menu").addClass("on");
        $("body").addClass("hidden");
        menuHide = false;
    } else {
        $(this).removeClass("on");
        $("#header .nav-menu.moblie .main-menu").removeClass("on");
        $("body").removeClass("hidden");
        menuHide = true;

    }
})

$("#header .nav-menu.moblie .nav-link").on("click", function(){
    $(this).parent().find(".sub-menu").stop().slideToggle(300);
    $(this).parent().find(".icon-arrow").toggleClass("on");
})

// sc-visual
$(".sc-visual .slide-col").each(function(){
    const slideItem = $(this).find(".slide-item");

    slideItem.each(function(){
        var cloneItem = $(this).clone();
        $(this).parent().append(cloneItem);
    })
})

// as-brand
$(".as-brand .img-wrap").each(function(){
    const cloneImg = $(this).clone();
    $(".as-brand .marquee").append(cloneImg);
})

// sc-project
const ProjectSwiper = new Swiper(".project-swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
        prevEl: ".sc-project .btn-prev",
        nextEl: ".sc-project .btn-next"
    },
    breakpoints: {
        300: { slidesPerView: 1.2 },
        720: { slidesPerView: 2.5 },
        1280: { slidesPerView: 3.4 }
    }
})


//sc-business
$('[data-sideway]').each(function(idx, el){
    var sidewayInteger = $(this).data("sideway");
    gsap.set(el, {x: `${sidewayInteger}10vw`})
})
$('[data-sideway]').each(function(idx, el){
    var sidewayInteger = $(this).data("sideway");

    sidewayInteger = (sidewayInteger === "+") ? "-" : "+";

    gsap.to(el, {
        x: `${sidewayInteger}10vw`,
        ease: "none",
        scrollTrigger: {
            trigger: ".sc-business .thumb-area",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        }
    })
})

// sc-partners
partnerTimeline = gsap.timeline({
    defaults:{
        duration: 1,
        delay: 1,
    },
    repeat: -1,
})
partnerTimeline.to('[data-type="1"] .gradient-shape', { 'background-color':'rgb(61, 30, 199)' }, 'a')
partnerTimeline.to('[data-type="1"] .item1', {xPercent: -100}, 'a')
partnerTimeline.to('[data-type="1"] .item2', {x: 0}, 'a')
partnerTimeline.to('[data-type="1"] .gradient-shape', { 'background-color':'rgba(255, 255, 255, 0.44)' }, 'b')
partnerTimeline.to('[data-type="1"] .item2', {xPercent: -100}, 'b')
partnerTimeline.to('[data-type="1"] .item3', {y: 0}, 'b')
partnerTimeline.to('[data-type="1"] .gradient-shape', { 'background-color':'rgba(255, 72, 53, 0.66)' }, 'c')
partnerTimeline.to('[data-type="1"] .item3', {yPercent: 100}, 'c')
partnerTimeline.to('[data-type="1"] .item1', {xPercent:0}, 'c')

partnerTimeline.to('[data-type="2"] .gradient-shape', { 'background-color':'rgba(53, 211, 255, 0.66)' }, 'a')
partnerTimeline.to('[data-type="2"] .item1', {yPercent: 100}, 'a')
partnerTimeline.to('[data-type="2"] .item2', {y: 0}, 'a')
partnerTimeline.to('[data-type="2"] .gradient-shape', { 'background-color':'rgb(62, 29, 206)' }, 'b')
partnerTimeline.to('[data-type="2"] .item2', {yPercent: 100}, 'b')
partnerTimeline.to('[data-type="2"] .item3', {x: 0}, 'b')
partnerTimeline.to('[data-type="2"] .gradient-shape', { 'background-color':'rgb(62, 29, 206)' }, 'c')
partnerTimeline.to('[data-type="2"] .item3', {xPercent: -100}, 'c')
partnerTimeline.to('[data-type="2"] .item1', {yPercent: 0}, 'c')

// sc-graphic
$("[data-upright]").each(function(idx, el){
    var uprightNum = $(this).data("upright");

    gsap.to(el, {
        y: uprightNum,
        ease: "none",
        scrollTrigger: {
            trigger: ".sc-graphic .thumb-area",
            start: "50% bottom",
            end: "bottom top",
            scrub: true,
        }
    })
})

gsap.to(".sc-graphic .slide-cols", {
    scale: 1.5,
    ease: "none",
    scrollTrigger: {
        trigger: ".sc-graphic .thumb-area",
        start: "50% bottom",
        end: "bottom top",
        scrub: true,
    }
})

// sc-method
var tabLength = $('.sc-method .content').length; //4
var tabs = $('.sc-method .content .text-area');
var currentIndex = 0;

let timer = setInterval(nextTab, 5000); // 초기실행 5초 뒤마다 호출되는 코드

$('.sc-method .text-area').click(function() {
    var menu = $(this).data('thumb');
    var index = $(this).parent('.content').index();

    $(".sc-method").find(menu).addClass('on').siblings().removeClass('on');
    $('.sc-method .content').eq(index).addClass('active').siblings().removeClass('active');

    currentIndex = index;
    clearInterval(timer); // 기존 타이머 중지
    timer = setInterval(nextTab, 5000); // 새로운 타이머 설정
})  

function clickTab(index) { // 인덱스 전달시 클릭
  tabs[index].click(function() {
  })
}

function nextTab() {  // 5초 뒤마다 호출되는 코드
  currentIndex++;
  if (currentIndex >= tabLength) {
      currentIndex = 0; 
  }
  clickTab(currentIndex);
}
clickTab(currentIndex); // 초기실행 처음


// sc-service
$(".sc-service .num .text").each(function(){
    const cloneText = this.cloneNode(true);
    cloneText.classList.remove("text");
    cloneText.classList.add("clone-text");
    $(this).parent().append(cloneText);
})
$(".sc-service .num .text").each(function(){
    let splitChar = new SplitType(this, {type: "chars"});
})
$(".sc-service .num .clone-text").each(function(){
    let splitChar2 = new SplitType(this, {type: "chars"});
})
gsap.set(".sc-service .num .clone-text .char", {yPercent: 100})

$(".sc-service .service-list li").hover(
    function(){
        $(this).find(".gradient-bg").css("height", "100%");
        $(this).find(".text-area").css("transform", "translateX(1rem)");
        $(this).find(".img-box").css("transform", "translateX(-1rem)");
        $(this).find(".img-box .inner").css("transform", "translateY(-66.666%)");
        gsap.to($(this).find(".num .text .char"), 
            {yPercent: -100, ease: "power3.inOut", stagger: 0.05, duration: 0.4}
        );
        gsap.to($(this).find(".num .clone-text .char"), 
            {yPercent: 0, ease: "power3.inOut", stagger: 0.05, duration: 0.4}
        );
    },
    function(){
        $(this).find(".gradient-bg").css("height", "0%");
        $(this).find(".text-area").css("transform", "translateX(0)");
        $(this).find(".img-box").css("transform", "translateX(0)");
        $(this).find(".img-box .inner").css("transform", "translateY(0)");
        gsap.to($(this).find(".num .text .char"), 
            {yPercent: 0, ease: "power3.inOut", stagger: 0.05, duration: 0.4}
        );
        gsap.to($(this).find(".num .clone-text .char"), 
            {yPercent: 100, ease: "power3.inOut", stagger: 0.05, duration: 0.4}
        );
    }
)

$(".sc-service .service-list li").each(function(idx, el){
    gsap.set(el, {yPercent: 10, opacity: 0})
})
$(".sc-service .service-list li").each(function(idx, el){
    gsap.to(el, {
        yPercent: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
            trigger: el,
            start: "20% 100%",
            end: "70% 90%",
            scrub: true,
        }
    })
})

// sc-timeline 
gsap.from('.sc-timeline .content-text', {
    xPercent: -20,
    opacity: 0,
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".sc-timeline .layout-area",
        start: "0% 50%",
        end: "100% 50%",
        toggleActions: "play none none none",
    }
})

// sc-question
$(".sc-question .ques-item").on("click", function(){
    $(this).find(".desc-wrap").stop().slideToggle(300);
    $(this).find(".icon").toggleClass("on");
})

$(".sc-question .ques-item").each(function(idx, el){
    quesTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: "0 93%",
            end: "90% 93%",
        }
    });
    quesTimeline.from($(el).find(".title"), {
        opacity: 0,
        y: 10,
        rotation: -2,
        ease: "none"
    }, "a");
    quesTimeline.from($(el).find(".icon"), {
        opacity: 0,
        x: 10,
        ease: "none",
    }, "a")
})

// btn-cta
$(".btn-cta .text").each(function(){
    const cloneText = this.cloneNode(true);
    cloneText.classList.remove("btn-text");
    cloneText.classList.add("btn-clone-text");
    $(this).parent().append(cloneText);
})

$(".btn-cta .arrow").each(function(){
    const cloneArrow = this.cloneNode(true);
    cloneArrow.classList.remove("btn-arrow");
    cloneArrow.classList.add("btn-clone-arrow");
    $(this).parent().append(cloneArrow);
});
