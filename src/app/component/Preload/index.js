import PreloadIcon from "@/app/assets/Svgs/PreloadIcon";

const Preload = () => {

    const preLoad = {
        width: '100vw',
        height: '100vh',
        background: "#242731"
    };

    const preLoader = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

  return (
    <div style={preLoad}>
        <div style={preLoader}>
            <PreloadIcon />
        </div>
    </div>
  )
}

export default Preload;