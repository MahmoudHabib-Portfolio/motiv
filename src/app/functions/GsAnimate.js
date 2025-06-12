import { gsap } from "gsap";

export const CarAnimate = (elem) => {
    gsap.fromTo(elem, {y:200, duration: 2, yoyo:true, ease:"elastic.inOut"}, 
        {y:0, autoAlpha: 1, duration: 2, yoyo:true, ease:"elastic.inOut"})
}