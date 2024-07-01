// 스크롤(lenis 라이브러리)
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 600)
})

gsap.ticker.lagSmoothing(0)

// header
const hourF = document.querySelector("#header .hour-f");
const hourS = document.querySelector("#header .hour-s");
const minuteF = document.querySelector("#header .minute-f");
const minuteS = document.querySelector("#header .minute-s");
const AmPm = document.querySelector("#header .ampm");

function getDate() {
  const today = new Date();
  const hours = today.getHours() % 12 ? today.getHours() % 12 : 12;
  const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
  const ampm = today.getHours() >= 12 ? 'PM' : 'AM';

  const FormatHours = padZero(hours);
  const FormatMinutes = padZero(minutes);

  hourF.textContent = FormatHours[0] == 0 ? '' : FormatHours[0]; 
  hourS.textContent = FormatHours[1]; 
  minuteF.textContent = FormatMinutes[0];
  minuteS.textContent = FormatMinutes[1]; 
  AmPm.textContent = ampm;
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}

getDate();
setInterval(getDate, 60 * 1000);

// sticy-wrapper
let mm = gsap.matchMedia();

mm.add("(min-width: 991px)", ()=> {
  
  const introChar = new SplitType(".sc-intro .main-desc", {type: 'chars',});
  
  var stickyAni = gsap.timeline({
    scrollTrigger: {
      trigger: ".sticky-wrapper",
      start: "0% 0%", 
      end: "100% 100%",
      scrub: true
    }
  });
  
  stickyAni
  .to(".main-text", {
      fontSize: gsap.getProperty(".main-text", "fontSize") * 1.6,
      top: "46%",
      yPercent: -100
  }, 'a')
  .to(".main-text .main-text__span", {
      marginLeft: 0
  }, 'a')
  .to(".main-text .main-text__svg", {
      maxHeight: "5.5vw"
  }, 'a')
  .to(".main-video", {
      maxWidth: "30vw",
      xPercent: 120,
      yPercent: -20
  }, 'a')
  .to(".name-text", {
    fontSize: gsap.getProperty(".main-text", "fontSize") * 1.6,
      bottom: "46%",
      yPercent: 100,
  }, 'a')
  .to(".name-text .name-text__span", {
      marginLeft: "-13vw"
  }, 'a')
  
  .to(".sc-visual", {
    xPercent: 100
  }, 'b')
  .from(".sc-intro .main-img-wrapper", {
    xPercent: -100,
    opacity: 0
  }, 'b-=0.5')
  .to(".sc-intro .main-img-wrapper", {
    maxHeight: "70vh",
  }, 'b')
  .from(".sc-intro .main-desc", {
    opacity: 0,
    xPercent: 50
  }, 'b')
  
  .to(".sc-intro .inner .main-desc .char", {
    opacity: 1,
    duration: 0.03,
    stagger: 0.01,
    onUpdate: function(){
      const totalImgCnt = $(".sc-intro .main-img-wrapper img").length;
  
      let progress = this.progress();
      let imgIndex = Math.round(progress * (totalImgCnt - 1));
      
      const currentImage = $(".sc-intro .main-img-wrapper img.on");
      const newImage = $(".sc-intro .main-img-wrapper img").eq(imgIndex);
  
      if (currentImage) {
        currentImage.removeClass("on");
      }
      if (newImage) {
        newImage.addClass("on");
      }
    }
  })
  
  let imgList = ``;
  for (let i = 0; i < 11; i++) {
    firstClass = (i === 0)?"on":"";
    imgList += `<img class="${firstClass}" src="./assets/images/common/0${i + 1}.jpg" alt>`
  }
  $(".sc-intro .main-img-wrapper").html(imgList);
});
  
// side-scroll-text
$(".side-scroll-text .text-wrap .text").each(function(){
  const cloneText = $(this).clone();
  $(".side-scroll-text .text-wrap").append(cloneText);
})


// bg-content
gsap.to(".bg-content .overlay", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".bg-content .overlay",
      start: "top top", 
      end: "bottom top",
      scrub: true,
    }
  }
);

const descText = new SplitType(".bg-content .desc .text", {type: 'chars',});

var descAni = gsap.timeline({
  scrollTrigger: {
    trigger: ".bg-content",
    start: "15% 50%",
  }
});

gsap.set(".bg-content .desc .text .char", {yPercent: 100});

descAni.to(".bg-content .desc .text .char", {
  stagger: 0.02,
  yPercent: 0,
})


// sc-project
gsap.to(".sc-project .content-wrapper", {
  clipPath: "inset(1rem round 1rem 1rem 1rem 1rem)", // 끝 값
  scrollTrigger: {
    trigger: ".sc-project .content-wrapper",
    start: "90% top", 
    end: "bottom top",
    scrub: true,
  }
}
);

// mouse
$(document).mousemove(function(e){
  xVal = e.clientX;
  yVal = e.clientY;
  gsap.to(".mouse-follow", {
    x: xVal,
    y: yVal
  })
})

$(".sc-project .content-link").on('mouseenter', function() {
  $(".mouse-follow").addClass("active");
  $(".mouse-follow .text").addClass("active");
}).on('mouseleave', function() {
  $(".mouse-follow").removeClass("active");
  $(".mouse-follow .text").removeClass('active');
});

// 새로고침
window.onresize = function(){
  if (window.matchMedia("(min-width: 769px)").matches) {
    document.location.reload();
  }
};
