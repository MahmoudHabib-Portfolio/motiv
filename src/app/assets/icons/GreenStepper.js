import gsap from "gsap";
import { useEffect } from "react";

const GreenStepper = (props) => {

  useEffect(() => {
  const el = document.getElementById('step01');
  gsap.fromTo(el, 
    {height:"0%", duration:'1', ease:"power3.inOut"}, {height:"100%", duration: '1', ease:"power3.inOut"});
}, []);

  return (
    <svg
    width={4}
    height={40}
    viewBox="0 0 4 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect id="step01" x={0.5} width={3} height={40} rx={1.5} fill="#70CF97" />
  </svg>
  )
}

export default GreenStepper;