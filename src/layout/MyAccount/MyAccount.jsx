import React, { useContext } from "react";
import CreditCard from "../../components/CreditCard/CreditCard";
import Sidebar from "../../components/sidebar/Sidebar";
import { FcMoneyTransfer, FcCurrencyExchange } from "react-icons/fc";

import { useHistory } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Perfil from "../../components/Perfil/Perfil";

const MyAccount = () => {
  const histoy = useHistory();
  const { authState, getSaldo, saldo } = useContext(AuthContext);

  if (!saldo) {
    authState.userInformation == null
      ? histoy.push("/login")
      : getSaldo(authState.userInformation.id_persona);
  }

  if (!authState.isAuthenticated) {
    histoy.push("/login");
  }

  return (
    <div>
      <Sidebar />
      <Perfil />
      <CreditCard />
      <div className="flex justify-around">
        <div className="flex justify-around w-full mx-8 h-32 shadow-2xl rounded-2xl  p-4 bg-white dark:bg-gray-400 mt-8">
          <div className="flex flex-col justify-start items-center m">
            <div className="flex justify-center items-centers mt-4">
              <FcMoneyTransfer size={25} />
              <p className="text-md  font-bold text-gray-700 dark:text-gray-50 ml-2 ">
                Soles
              </p>
            </div>

            <p className="text-gray-800 text-2xl text-left dark:text-white font-bold my-4">
              S/ {(authState.saldo.saldo).toLocaleString('en')+ '.00'}

            </p>
          </div>
        </div>
        {/*
        
        <div className="flex justify-around w-36 h-32 shadow-xl rounded-2xl  p-4 bg-white dark:bg-gray-200 mt-8">
          <div className="flex flex-col justify-start items-center m">
            <div className="flex justify-center items-centers mt-4">
              <FcCurrencyExchange size={25} />
              <p className="text-md  font-bold text-gray-700 dark:text-gray-50 ml-2 ">
                Dólares
              </p>
            </div>

            <p className="text-gray-800 text-2xl text-left dark:text-white font-bold my-4">
              $ { (parseFloat(authState.saldo.saldo) /4.14).toFixed(2)}
            </p>
          </div>
        </div>
        
        */}
      </div>
    </div>
  );
};

export default MyAccount;
