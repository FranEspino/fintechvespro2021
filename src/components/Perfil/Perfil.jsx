import  { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { AiTwotoneMail, AiFillPhone } from "react-icons/ai";

const Perfil = () => {

    const { authState } = useContext(AuthContext);
    return (
        <div className="w-full flex flex-row items-center justify-center">
        <div className="block relative mt-24">
          <img
            alt="profil"
            src={
              authState.userInformation == null
                ? "https://res.cloudinary.com/frapoteam/image/upload/v1632843663/vespro_za4rpc.png"
                : authState.userInformation.foto
            }
            className="mx-auto object-cover rounded-full h-16 w-16 "
          />
          <span className="absolute w-3 border-2 left-1/2 -bottom-2 transform -translate-x-1/2 border-white h-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="ml-6 flex flex-col mt-24">
          <h3 className="font-bold font-sans text-sm  ">
            {authState.userInformation == null
              ? ""
              : authState.userInformation.nombre}
          </h3>

          <div className="flex ">
            <AiTwotoneMail />
            <h3 className="font-bold text-xs ml-2">
              {authState.userInformation == null
                ? ""
                : authState.userInformation.email}
            </h3>
          </div>

          <div className="flex ">
            <AiFillPhone />
            <h3 className="font-bold text-xs  ml-2">
              {authState.userInformation == null
                ? ""
                : authState.userInformation.telefo}
            </h3>
          </div>
        </div>
      </div>

    )
}

export default Perfil
