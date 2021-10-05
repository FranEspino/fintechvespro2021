import SalirAnimate from "../../assets/goodbye.json";
import Lottie from "react-lottie";
export default function Salir() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SalirAnimate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return  (
    <Lottie options={defaultOptions} height={150} width={150} />
  ) 
}
