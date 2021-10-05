import Transfer from "../../assets/transfer.json";
import Lottie from "react-lottie";
export default function TransferSuccess() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Transfer,
    rendererSettings: {
      
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return  (
    <Lottie options={defaultOptions} height={250} width={250} />
  ) 
}

