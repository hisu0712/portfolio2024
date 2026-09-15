// fullpage
$(document).ready(function(){
    new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
        menu: '#menu',
        slidesNavigation: true,
        scrollOverflow: true,
        scrollOverflowReset: true,
        scrollOverflowResetKey: 'MVVZV3gyWVhKdmRISnBaMjh1WTI5dEtNX25RVWMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT05SzI=',
        v2compatible: true,
        css3: true,
        easing: 'easeInOutCubic',
        scrollingSpeed: 800,
        scrollOverflowEndPrevent: { delay: 500, reversal: false },
        scrollOverflowOptions: {
            scrollbars: false,
            disablePointer: false
        },
        fitToSection: true,
    })
})

// header 
$("#header .mo-menu").on("click", function(){
    $("#header .mo-nav").addClass("active");
    $("#header .dimmed").addClass("on");
    $("body").addClass("hidden");
})
$("#header .btn-close").on("click", function(){
    $("#header .mo-nav").removeClass("active");
    $("#header .dimmed").removeClass("on");
    $("body").removeClass("hidden");
})
$(window).scroll(function(){
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop);
    
    if (scrollTop > 5) {
        $("#header").addClass("active");
        $(".scroll-top").addClass("on");
    } else {
        $("#header").removeClass("active");
        $(".scroll-top").removeClass("on");
    }
})

// sc-visual
const ScVisualSwiper = new Swiper(".sc-visual-swiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".pagination",
        type: "custom",
        renderCustom: function(swiper, current, total){
            return `<span class="curr">${current}</span><span class="total">${total}</span>`
        }
    },
    navigation: {
        prevEl: ".btn-prev",
        nextEl: ".btn-next"
    },
    on: {
        "init": function(){
            $("#svg #bar").css({'stroke-dashoffset':'52.24px'})
            $("#svg #bar").stop().animate({'stroke-dashoffset':'0'}, 3000);
        },
        "slideChange": function(){
            $("#svg #bar").css({'stroke-dashoffset':'52.24px'})
            $("#svg #bar").stop().animate({'stroke-dashoffset':'0'}, 3000);
        }
    }
})

// sc-service
$(".sc-service .img-cols li").each(function() {
    let cloneCol = $(this).clone();
    $(this).parent().append(cloneCol);
});


// footer
let contentHide = true;

$("footer .site-btn").on("click", function(){

    if (contentHide) {
        $(this).addClass("on");
        $("#footer .site-list").addClass("on");
        contentHide = false;
    } else {
        $(this).removeClass("on");
        $("#footer .site-list").removeClass("on");
        contentHide = true;
    }
})
