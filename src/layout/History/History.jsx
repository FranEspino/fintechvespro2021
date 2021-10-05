import axios from "axios";
import  { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { useHistory } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import {FcCurrencyExchange} from 'react-icons/fc'
import LoaderAnimate from "../../components/Loader/LoaderAnimate";
const History = () => {
  const [historydata, setHistoryData] = useState([]);
  const { authState, saldo ,getSaldo} = useContext(AuthContext);
  const histoy = useHistory();
  
  if (!saldo) {
    authState.userInformation == null
      ? histoy.push("/login")
      : getSaldo(authState.userInformation.id_persona);
  }
  if (!authState.isAuthenticated) {
    histoy.push("/login");
  }
  const getHistory = async () => {
    try {
      const response = await axios.get(
        `https://fintechapivespro.herokuapp.com/api/operaciones?cuenta=${saldo.id_cuenta}`
      );
      const data = await response.data;
      if(data){

        setHistoryData(data);
        
      }else{
        histoy.push("/historial");
      }
    } catch (error) {
      console.log(error);
    }
  
  }
  useEffect( () => {
    getHistory()

  });

  return (
    <div>
      <Sidebar />
      <table className={` min-w-full mt-16`}>
        <thead>
          <tr>
            <th className="text-center px-2 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Destinatario
            </th>
            <th className="text-center px-2 py-3 border-b border-gray-200 bg-gray-50  text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Nmr. Cuenta
            </th>
            <th className="text-center px-2 py-3 border-b border-gray-200 bg-gray-50  text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Monto
            </th>
            <th className="text-center px-2 py-3 border-b border-gray-200 bg-gray-50  text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
          
            <th className="text-center px-2 py-3 border-b border-gray-200 bg-gray-50  text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Descripción
            </th>
          </tr>
        </thead>
        {Object.keys(historydata).length === 0 ? (
        
        <div className={`ml-24`}>
 

          <LoaderAnimate />
        
        </div>
      ) : (
        <div className={`hidden`}>
          <LoaderAnimate />
        </div>
      )}
        <tbody className="bg-white">
        {
              historydata.map((e) => (
                <tr key={e.id_cuenta}>
                  
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="ml-4">
                           <FcCurrencyExchange/>
                           {e.Nombre + ' ' +e.Apellidos }
                      </div>
                    </div>
                  </td>
                  <td className="px-6  py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    {e.CtaDestino}
                  </td>
                  <td className="px-6 font-bold py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    S/{e.Monto}
                  </td>
                  <td className="px-6  py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    {
                      e.FechayHora
                    }
                  </td>
               
                  <td className="px-6  py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    Transferencia
                  </td>
                </tr>
              ))
          }
   
        </tbody>
      </table>
    </div>
  );
};

export default History;
