import Lenis from "@studio-freight/lenis" // 이 패키지는 스크롤 관련 애니메이션을 처리하는 기능을 제공

const lenis = () => {
    const lenis = new Lenis({  // Lenis 클래스의 인스턴스를 생성, 옵션 객체를 전달하여 스크롤 애니메이션의 속성(duration, easing 등)을 설정
        duration: 1,  // 스크롤 애니메이션의 기간을 1초로 설정
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10*t)),  // 스크롤 애니메이션의 가속도 함수를 정의, 이 함수는 빠르게 가속하다가 느려지면서 부드럽게 완료하도록 함.
    });

    function raf(time){
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    lenis.on("scroll", (e) => {
        console.log(e);
    });
};

export default lenis;