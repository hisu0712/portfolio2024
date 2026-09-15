//스크롤 처리
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 600)
})

gsap.ticker.lagSmoothing(0)

// header
function updateTime() {
    const currentTime = new Date();
    const hours = padZero(currentTime.getHours());
    const minutes = padZero(currentTime.getMinutes());
    $(".current-hour").text(hours);
    $(".current-minute").text(minutes);
}
function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}
updateTime();
setInterval(updateTime, 1000);

gsap.fromTo(".sc-header .logo h1, #header .text-area .desc, #header .text-area .time-wrap, #header .text-area .info-wrap",     
    {yPercent: 100}, 
    {yPercent: 0, ease: "circ.out", delay: 2, duration: 1} // delay와 duration으로 타이밍 조절
);

// sc-header
var headerTimeline = gsap.timeline();

headerTimeline.fromTo(".sc-header .img-wrap", {width: "33%", height: "0"}, {width: "33%", height: "75%", duration:1})
            .fromTo(".sc-header .img-wrap", {width: "33%", height: "75%"}, {width: "100%", height: "100%", duration:1})
            .fromTo(".sc-header .img-wrap", {yPercent: 0}, {yPercent: -20, duration: 1});

// sc-story
gsap.to(".sc-story .col-left .img-wrap", {
    backgroundPosition: "100% 0%",
    ease: "none", 
    scrollTrigger: {
        trigger: ".sc-story .content",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
})
gsap.to(".sc-story .col-right .img-wrap", {
    backgroundPosition: "50% 0%",
    ease: "none",
    scrollTrigger: {
        trigger: ".sc-story .col-right .img-wrap",
        start: "top bottom",
        end: "bottom top", 
        scrub: true,
    }
})

// sc-harmony
gsap.to(".sc-harmony .img-area .img-wrap.h1", {
    backgroundPosition: "50% 100%",
    ease: "none", 
    scrollTrigger: {
        trigger: ".sc-harmony .img-area .content.c1",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
})
gsap.to(".sc-harmony .img-area .img-wrap.h2", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: ".sc-harmony .img-area .content.c2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
})
gsap.to(".sc-harmony .img-area .img-wrap.h3", {
    backgroundPosition: "50% 100%",
    ease: "none", 
    scrollTrigger: {
        trigger: ".sc-harmony .img-area .content.c3",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
})
gsap.to(".sc-harmony .img-area .img-wrap.h4", {
    backgroundPosition: "48% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: ".sc-harmony .img-area .content.c4",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
})

// sc-desc
gsap.fromTo(".sc-desc .text",
    { 
        opacity: 0,
        yPercent: 100 + 32, 
    },
    {
        opacity: 1,
        yPercent: -100 - 32,
        ease: "none",
        scrollTrigger: {
            trigger: ".sc-desc",
            start: "top center",
            end: "70% center",
            scrub: true,
        }
    }
);

//sc-tabs
$(".sc-tabs .tab-title").click(function(e){
    e.preventDefault();
    
    $(".sc-tabs .tab-title, .sc-tabs .tab-content").removeClass("active");
    $(this).addClass("active");
    $(this).next().addClass("active");
})

// sc-apt
$(".apt-title").each(function(){ // apt-title 복제
    const cloneAptTitle = this.cloneNode(true);
    cloneAptTitle.classList.remove("apt-title");
    cloneAptTitle.classList.add("apt-title2");
    $(this).parent().append(cloneAptTitle);
})
new SplitType(".apt-title", {type: "chars"});
new SplitType(".apt-title2", {type: "chars"});

gsap.set(".apt-title2 .char", {yPercent: 100});

$(".btn-open").hover(function(){ 
    gsap.to($(this).find(".apt-title .char"),
        {yPercent: -100, ease: "power3.inOut", stagger: 0.03, duration: 0.6}
    );
    gsap.to($(this).find(".apt-title2 .char"),
        {yPercent: -10, ease: "power3.inOut", stagger: 0.03, duration: 0.6}
    );
}, function(){
    gsap.to($(this).find(".apt-title .char"),
        {yPercent: 0, ease: "power3.inOut", stagger: 0.03, duration: 0.5} 
    );
    gsap.to($(this).find(".apt-title2 .char"),
        {yPercent: 100, ease: "power3.inOut", stagger: 0.03, duration: 0.5}
    );
});

$(".sc-apt .btn-open").click(function(){
    $(this).parent().find(".apt-cont").addClass("on");
    $("body").addClass("hidden");
    lenis.stop();
})
$(".sc-apt .btn-close, .dimmed").click(function(){
    $(".sc-apt .apt-cont").removeClass("on");
    $("body").removeClass("hidden");
    lenis.start();
})

// // sc-jadran
gsap.to(".sc-jadran .img-wrap", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: ".sc-jadran .content",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
})

// // sc-zadar
gsap.to(".sc-zadar .col-left .img-wrap", {
    backgroundPosition: "50% 90%",
    ease: "none",
    scrollTrigger: {
        trigger: ".sc-zadar .col-left .img-wrap",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
})
gsap.to(".sc-zadar .col-right .img-wrap", {
    backgroundPosition: "50% 90%",
    ease: "none",
    scrollTrigger: {
        trigger: ".sc-zadar .col-right .img-wrap",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
})

// footer
$("footer .col-right span").each(function(){ 
    const cloneText = this.cloneNode(true);
    cloneText.classList.remove("text");
    cloneText.classList.add("clone-text");
    $(this).parent().append(cloneText);
})
new SplitType("footer .text", {type: "chars"});
new SplitType("footer .clone-text", {type: "chars"});

gsap.set("footer .clone-text .char", {yPercent: 90});

$("footer .sns-area a").hover(function(){ 
    gsap.to($(this).find(".text .char"),
        {yPercent: -90, ease: "power3.inOut", stagger: 0.03}  
    );
    gsap.to($(this).find(".clone-text .char"),
        {yPercent: 0, ease: "power3.inOut", stagger: 0.03}
    );
}, function(){
    gsap.to($(this).find(".text .char"),
        {yPercent: 0, ease: "power3.inOut", stagger: 0.03} 
    );
    gsap.to($(this).find(".clone-text .char"),
        {yPercent: 90, ease: "power3.inOut", stagger: 0.03}
    );
});

// sc-contact
var hoverExecuted = false; 


$(".btn-wrap").hover(function() {
    var contactTimeline = gsap.timeline();
    
    var line =$(this).find(".line");
    var beforeline =$(this).find(".before-line");
    
    gsap.set(".btn-wrap .line", {width: "100%", left: "0%"});
    gsap.set(".btn-wrap .before-line", {width: "0%"});

    if (!hoverExecuted) { 
        contactTimeline.to(line, {width: "0%", left: "100%"} )
                    .to(beforeline, {width: "100%"} );
        hoverExecuted = true;
    }
}, function() {
    hoverExecuted = false; 
});