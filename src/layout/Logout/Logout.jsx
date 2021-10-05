import { useContext, useEffect } from 'react'
import Salir from '../../components/Salir/Salir';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from "react-router";
const Logout = () => {
    const histoy = useHistory();
    const { singOut } = useContext(AuthContext);
    useEffect(()=>{
      singOut();
      setTimeout( () =>{
          histoy.push("/login");
      },2500 )
    },[]);

    return (
        <div className="flex justify-center flex-col items-center w-full h-screen">
            <h2 className="sans-serif text-black font-extrabold text-2xl text-center ">
            Gracias por utilizar Vespro Fintech 👋🏻
            </h2>
            <Salir />

        </div>
    )
}

export default Logout
