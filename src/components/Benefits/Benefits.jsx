import React from "react";
import Girl from "../../assets/Girl.svg";
import Finances from "../../assets/Finances.svg";

import Ecommerce from "../../assets/Ecommerce.svg";

const Benefits = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-8 mx-6">
        <div className="flex flex-row w-full items-center  border-b-2 border-gray-300">
          <div>
            <h1 className="font-extrabold sans-serif text-md">
              Una mejor opción de pago
            </h1>
            <p className="Apple Color Emoji mt-4">
              Paga con tu tarjeta Vespro desde cualquuier lugar.
            </p>
          </div>
          <img width={180} src={Girl} alt="Girl Vespro"></img>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 mx-6">
        <div className="flex flex-row w-full items-center  border-b-2 border-gray-300">
          <img width={180} src={Finances} alt="Finances"></img>
          <div>
            <h1 className="font-extrabold sans-serif text-md">
              Olvidate del papeleo
            </h1>
            <p className="Apple Color Emoji mt-4">
              Olvída de los trámites bancarios y mucho papeleo.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 mx-6">
        <div className="flex flex-row w-full items-center  border-b-2 border-gray-300">
          <div>
            <h1 className="font-extrabold sans-serif text-md">
              Compras 100% online
            </h1>
            <p className="Apple Color Emoji mt-4">
              Afiliate a nosotros y ofrece pagos 100% virtuales.
            </p>
          </div>
          <img width={180} src={Ecommerce} alt="Ecommerce"></img>
        </div>
      </div>
    </>
  );
};

export default Benefits;
