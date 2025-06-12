import gsap from "gsap";
import { useEffect } from "react";

const CarModelShadow = (props) => {

  useEffect(() => {

    const showCar = () => {
      gsap.from('#img01', {
        x:"-100%",
        autoAlpha:0,
        duration: 0.8,
        ease:"power3.out"
      });

      gsap.to('#img01', {
        x:"0%",
        autoAlpha:1,
        duration: 0.8,
        ease:"power3.out"
      });      
    }

    const tl = gsap.timeline({delay: 0.5, onComplete: showCar});

    tl.fromTo('.axis',
       {y:"100%", duration: 0.8, ease:"power1.out"}, {y:"0%", duration: 0.8, ease:"power2.out"});
    
      }, []);

  return (
    <svg
    width={"100%"}
    height={"100%"}
    viewBox="0 0 548 318"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <image 
    href="/imgs/audi-s3.png"
    width={375}
    height={250}
    x={86.5}
    y={0}
    opacity={0}
    id="img01"
    />
    <g transform="translate(0, 50)">
    <path
      d="M287.247 257.256C48.0465 256.456 -3.08682 202.59 1.24651 175.756C1.24651 148.59 49.1465 91.9562 240.747 82.7562C432.347 73.5562 518.58 128.923 537.747 157.756C553.913 191.256 526.447 258.056 287.247 257.256Z"
      fill="url(#paint0_linear_0_1)"
      stroke="url(#paint1_linear_0_1)"
      className="axis"
    />
    <path
      d="M287.247 214.256C48.0465 213.456 -3.08682 159.59 1.24651 132.756C1.24651 105.59 49.1465 48.9562 240.747 39.7562C432.347 30.5562 518.58 85.9229 537.747 114.756C553.913 148.256 526.447 215.056 287.247 214.256Z"
      fill="url(#paint2_linear_0_1)"
      stroke="url(#paint3_linear_0_1)"
      className="axis"
    />
    <path
      d="M292.247 176.256C53.0465 175.456 1.91318 121.59 6.24651 94.7562C6.24651 67.5895 54.1465 10.9562 245.747 1.75618C437.347 -7.44382 523.58 47.9229 542.747 76.7562C558.913 110.256 531.447 177.056 292.247 176.256Z"
      fill="url(#paint4_linear_0_1)"
      stroke="url(#paint5_linear_0_1)"
      className="axis"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_1"
        x1={253.5}
        y1={141.737}
        x2={256.247}
        y2={238.256}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#252C46" stopOpacity={0} />
        <stop offset={1} stopColor="#262C42" stopOpacity={0.4} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_0_1"
        x1={258.5}
        y1={280.237}
        x2={265}
        y2={142.237}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#696D7A" stopOpacity={0.2} />
        <stop offset={1} stopColor="#030303" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint2_linear_0_1"
        x1={253.5}
        y1={98.7373}
        x2={256.247}
        y2={195.256}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#475275" stopOpacity={0} />
        <stop offset={1} stopColor="#23293D" stopOpacity={0.4} />
      </linearGradient>
      <linearGradient
        id="paint3_linear_0_1"
        x1={258.5}
        y1={237.237}
        x2={265}
        y2={99.2373}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#545866" stopOpacity={0.28} />
        <stop offset={1} stopColor="#070707" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint4_linear_0_1"
        x1={258.5}
        y1={60.7373}
        x2={261.247}
        y2={157.256}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2E3E71" stopOpacity={0} />
        <stop offset={1} stopColor="#36426C" stopOpacity={0.4} />
      </linearGradient>
      <linearGradient
        id="paint5_linear_0_1"
        x1={263.5}
        y1={199.237}
        x2={270}
        y2={61.2373}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#71747B" stopOpacity={0.28} />
        <stop offset={1} stopColor="#070707" stopOpacity={0} />
      </linearGradient>
    </defs>
     </g>
  </svg>
  )
}

export default CarModelShadow;