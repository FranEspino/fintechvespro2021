import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const CreditCard = () => {
  const { authState } = useContext(AuthContext);

  return (
    <div className="space-y-16 mt-8 z-0">
      <div className="w-90 mx-4 h-56 m-auto z-0 bg-red-100 rounded-xl  text-white shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          alt="Tarjeta Vespro"
          className=" w-full h-full rounded-xl"
          src="https://res.cloudinary.com/frapoteam/image/upload/v1633111352/background_mm3goq.jpg"
        />

        <div className="w-full px-8 absolute top-8">
          <div className="flex justify-between">
            <div className="">
              <p className="font-light">Nombre</p>
              <p className="font-bold tracking-widest font-mono ">
                {authState.userInformation == null
                  ? "Tarjeta Vespro"
                  : authState.userInformation.nombre}
                <br />
                {authState.userInformation == null
                  ? "Compra seguro"
                  : authState.userInformation.apellido}
              </p>
            </div>
            <img
              alt="Logo Vespro"
              className="w-16 "
              src="https://res.cloudinary.com/frapoteam/image/upload/v1632843663/vespro_za4rpc.png"
            />
          </div>
          <div className="pt-1">
            <p className="font-light">Num.</p>
            <p className="font-medium tracking-more-wider font-mono">
              <strong>4642</strong> 3489 9867{" "}
              <span className="bg-red-700  rounded-full px-2 py-1 text-xs absolute">
                ●●●●
              </span>
            </p>
          </div>

          <div className="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden"></div>
          <div className="pt-6 pr-6">
            <div className="flex justify-between">
              <div className="">
                <p className="font-light text-xs">Expiración</p>
                <p className="font-medium tracking-wider text-sm font-mono">
                  03/25
                </p>
              </div>

              <div className="">
                <p className="font-light text-xs">CVC</p>
                <p className="font-bold tracking-more-wider text-sm font-mono">
                  123
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
