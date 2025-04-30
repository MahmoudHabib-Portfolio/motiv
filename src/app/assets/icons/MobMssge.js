
const MobMssge = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={52}
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_242_14)">
      <rect
        x={4}
        y={2}
        width={44}
        height={44}
        rx={22}
        fill="#2B2E38"
        shapeRendering="crispEdges"
      />
      <path
        d="M25.1903 15.667C24.096 15.667 23.0123 15.8825 22.0013 16.3013C20.9902 16.7201 20.0716 17.3339 19.2978 18.1078C17.735 19.6706 16.857 21.7902 16.857 24.0003C16.8497 25.9246 17.516 27.7908 18.7403 29.2753L17.0737 30.942C16.958 31.0592 16.8797 31.208 16.8485 31.3696C16.8174 31.5313 16.8348 31.6986 16.8987 31.8503C16.9679 32.0003 17.0801 32.1263 17.221 32.2123C17.362 32.2984 17.5253 32.3406 17.6903 32.3337H25.1903C27.4005 32.3337 29.5201 31.4557 31.0829 29.8929C32.6457 28.3301 33.5237 26.2105 33.5237 24.0003C33.5237 21.7902 32.6457 19.6706 31.0829 18.1078C29.5201 16.545 27.4005 15.667 25.1903 15.667ZM25.1903 30.667H19.6987L20.4737 29.892C20.6289 29.7359 20.716 29.5246 20.716 29.3045C20.716 29.0843 20.6289 28.8731 20.4737 28.717C19.3825 27.627 18.703 26.1924 18.5509 24.6577C18.3988 23.1229 18.7836 21.5828 19.6397 20.2999C20.4957 19.017 21.7701 18.0706 23.2457 17.622C24.7214 17.1733 26.3069 17.2502 27.7322 17.8394C29.1575 18.4287 30.3344 19.4939 31.0624 20.8536C31.7903 22.2132 32.0244 23.7833 31.7246 25.2962C31.4248 26.8091 30.6097 28.1712 29.4183 29.1505C28.2268 30.1299 26.7326 30.6658 25.1903 30.667Z"
        fill="#E0E4E7"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_242_14"
        x={0}
        y={0}
        width={52}
        height={52}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0541667 0 0 0 0 0.0541667 0 0 0 0 0.0541667 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_242_14"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_242_14"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
  )
}

export default MobMssge;