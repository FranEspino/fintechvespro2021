import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";
import { AuthContext } from "../../context/AuthContext";
import ImgTransfer from "../../assets/info.png";
import TransferSuccess from "../../components/TranferSuccess/TransferSuccess";
import LoaderAnimate from "../../components/Loader/LoaderAnimate";
const Transfer = () => {
  const [state, setState] = useState("hidden");
  const [image, setImage] = useState("visible");
  const [success, setSuccess] = useState('hidden');
  const [notdni, setNotdni] = useState('hidden');

  const [dni, setDni] = useState("");
  const [clave, setClave] = useState("");
  const [monto, setMonto] = useState(0.0);
  const [persondest, setPersondest] = useState({});
  const histoy = useHistory();

  const { authState, getSaldo } = useContext(AuthContext);

  if (!authState.isAuthenticated) {
    histoy.push("/login");
  }

  const buscarDni = async (e) => {
    e.preventDefault();
    setImage("hidden");
    setNotdni('hidden');
    setState("visible");
    try {
      const {data} = await axios.get(
        `https://fintechapivespro.herokuapp.com/api/buscar-persona?dni=${dni}`
      );
      if(data.length == 0){
        setNotdni('visible');
        setState('hidden')
      }else{
        console.log(data[0])
        setPersondest(data[0]);
      }

   
    } catch (error) {
      console.log(error);
    }
  };

  const enviarTransferencia = async (e) => {
    e.preventDefault();
    setState("hidden");
    setSuccess('visible')
    const response = await axios.get(
      `https://fintechapivespro.herokuapp.com/api/transferencia?monto_trans=${monto}&idpersona_trans=${persondest.id_persona}&idpersona=${authState.userInformation.id_persona}&dni=${dni}&clave=${clave}`
    );
    const data = await response.data;
    console.log(data);
    setDni('');
    e.target.reset();
    getSaldo(parseInt(authState.userInformation.id_persona));
  };
  return (
    <>
      <Sidebar />
      <form className="z-0" onSubmit={buscarDni}>
        <div className=" flex mt-32 mx-8">
          <input
            onChange={(e) => setDni(e.target.value)}
            name="dni"
            type="number"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder="Ingresa el dni"
          />
          <button
            type="submit"
            className="ml-4 flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-red-200 rounded-lg shadow-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200"
          >
            🔎
          </button>
        </div>
      </form>
      <div className={`${notdni} flex w-full justify-center mt-8` }>
      <span className="text-bold text-lg text-center">Ups! al parecer la entidad <br/> no está registrada 😐</span>
      </div>

      {Object.keys(persondest).length === 0 ? (
        <div className={`${state}`}>
          <LoaderAnimate />
        </div>
      ) : (
        <div className={`hidden`}>
          <LoaderAnimate />
        </div>
      )}
      {
        <div className={`${success} w-full justify-center items-center`}>
     <h3 className="sans-serif text-red-700 font-extrabold text-2xl text-center mt-8">
          Transferencia realizada <br/> con éxito 
        </h3>
          <TransferSuccess />
        </div>
      }
      <div
        className={`${image} flex justify-center items-center flex-col mt-8`}
      >
        <h3 className="font-mono text-red-700 font-extrabold text-lg ">
          ¡ Busca una entidad para <br /> empezar con la transacción !
        </h3>
        <img
          className="mt-8"
          width={250}
          src={ImgTransfer}
          alt="Before Transfer"
        />
      </div>

      <table class={` min-w-full mt-6 ${state}`}>
        <thead>
          <tr>
            <th class="text-center px-2 py-3  text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Destinatario
            </th>
            <th class="text-center px-2 py-3  text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Dni
            </th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img
                    class="h-10 w-10 rounded-full"
                    src={persondest.foto}
                    alt=""
                  />
                </div>
                <div class="ml-4">
                  <div class="text-sm  leading-5 font-medium text-gray-900">
                    {persondest.nombre + " " + persondest.apellido}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6  py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
              {persondest.dni}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className={`p-6 mt-0 ${state}`}>
          <div className="text-centers w-full flex justify-center">
            <span className="sanf serif font-bold text-lg">Enviar Transferencia 💳</span>
          </div>
          <form className="z-0" onSubmit={enviarTransferencia}>
            <div className="flex justify-center items-center flex-col">
              <div className="flex relative mt-6 ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-red-300 text-red-500 shadow-sm text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 64 64"
                  >
                    <path
                      data-name="layer1"
                      d="M62 26l-4.6-4.6V15l-6-2.5L49 6.6h-6.5L38 2l-6 2.5L26 2l-4.5 4.6H15l-2.5 6L6.6 15v6.5L2 26l2.5 6L2 38l4.6 4.6V49l6 2.5 2.5 6h6.5L26 62l6-2.5 6 2.5 4.6-4.6H49l2.5-6 6-2.5v-6.4L62 38l-2.5-6zM34 48.5V52a2 2 0 0 1-4 0v-3.5a10 10 0 0 1-8-9.8 2 2 0 0 1 4 0 6 6 0 0 0 6 6c3.5 0 6-2.2 6-5.3S35.8 35 31.6 34c-7.9-1.8-9.6-6-9.6-9.3a9.3 9.3 0 0 1 8-9.2V12a2 2 0 0 1 4 0v3.5a10 10 0 0 1 7.9 8.1 2 2 0 1 1-3.9.7 6 6 0 0 0-5.9-5c-3.5 0-6 2.2-6 5.3 0 1 0 3.9 6.4 5.4 8.3 1.9 9.6 6.6 9.6 9.3a9.3 9.3 0 0 1-8.1 9.2z"
                      fill="#EF4444"
                    ></path>
                  </svg>
                </span>
                <input
                  onChange={(e) => setMonto(e.target.value)}
                  type="number"
                  id="create-account-pseudo"
                  className=" rounded-r-lg flex-1 appearance-none border border-red-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400  focus:border-transparent"
                  name="monto"
                  placeholder="Ingresa el monto"
                />
              </div>

              <div className="flex relative mt-6 ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-red-300 text-red-500 shadow-sm text-sm">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M52 10v1a5 5 0 1 1-10 0v-1H22v1a5 5 0 1 1-10 0v-1H2v44h60V10zM30 46H10v-1.7A10.1 10.1 0 0 1 20 34a6 6 0 1 1 6-6 6 6 0 0 1-6 6 10.1 10.1 0 0 1 10 10.3zm16-2h-8a2 2 0 0 1 0-4h8a2 2 0 0 1 0 4zm8-8H38a2 2 0 0 1 0-4h16a2 2 0 0 1 0 4zm0-8H38a2 2 0 0 1 0-4h16a2 2 0 0 1 0 4z"></path>
                  </svg>
                </span>
                <input
                  onChange={(e) => setDni(e.target.value)}
                  name="dni"
                  type="number"
                  className=" rounded-r-lg flex-1 appearance-none border border-red-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400  focus:border-transparent"
                  placeholder="Ingresa tu DNI"
                />
              </div>

              <div className="flex relative mt-6">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-red-300 text-red-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M53.5 0h-43A10.5 10.5 0 0 0 0 10.5v43A10.5 10.5 0 0 0 10.5 64h43A10.5 10.5 0 0 0 64 53.5v-43A10.5 10.5 0 0 0 53.5 0zm-15 48h-13l2.2-17.1a9 9 0 1 1 8.7 0z"></path>
                  </svg>
                </span>
                <input
                  onChange={(e) => setClave(e.target.value)}
                  name="clave"
                  type="password"
                  className=" rounded-r-lg flex-1 appearance-none border border-red-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                  placeholder="Ingresa tu clave"
                />
              </div>

              <button
                type="submit"
                className="mt-12 flex items-center px-6 py-2 text-red-400  transition ease-in duration-200 uppercase rounded-full hover:bg-red-800 hover:text-white border-2 border-red-300 focus:outline-none"
              >
                Transferir
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Transfer;
