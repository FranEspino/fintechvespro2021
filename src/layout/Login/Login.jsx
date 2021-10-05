import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";

const Login = () => {
  const [state,setState]= useState('hidden');
  const [dni, setDni] = useState("");
  const [clave, setClave] = useState("");
  const histoy = useHistory();
  const { singIn } = useContext(AuthContext);
  

  const guardarDatos = async (e) => {
    e.preventDefault();
    singIn({ dni, clave });
    setState('flex')
    setTimeout(() => {
      histoy.push("/home");
    }, 2000);


    e.target.reset();
    setDni("");
    setClave("");

  };

  return (
    <form className="z-0" onSubmit={guardarDatos}>
 
      <div className="flex h-screen justify-center flex-col items-center">
        <img
          width={80}
          height={80}
          src="https://res.cloudinary.com/frapoteam/image/upload/v1632843663/vespro_za4rpc.png"
          alt="Corporación Vespro"
        />
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

        <div className="flex relative mt-10">
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
          <div className={` ${state}` }>   
             <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
             </path>
            </svg>
          </div>
          Iniciar Sesión
        </button>
        <span className="mt-6 cursor-pointer">
          ¿Aún no tienes una cuenta? Registrate <strong>Aquí</strong>
        </span>

         
      </div>

    </form>
  );
};

export default Login;
