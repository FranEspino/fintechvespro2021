import Loader from "../../assets/loader.json";
import Lottie from "react-lottie";
export default function LoaderAnimate() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader,
    rendererSettings: {
      
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return  (
    <Lottie options={defaultOptions} height={180} width={180} />
  ) 
}
