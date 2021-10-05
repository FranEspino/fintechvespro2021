import { useContext, useEffect } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from "react-router";
import  Avatar from '../../assets/avatar.png'
import Benefits from '../../components/Benefits/Benefits';
import Fotter from '../../components/Fotter/Fotter';
import Services from '../../components/Services/Services';
import Typical from 'react-typical';
const Home = () => {

    const histoy = useHistory();
    const { authState, getSaldo} = useContext(AuthContext);
    useEffect(() => {
        if(authState.isAuthenticated){
            getSaldo(authState.userInformation.id_persona);
        } 
       
    },[authState.isAuthenticated])

    if(!authState.isAuthenticated){
        histoy.push("/login");
    } 
    return (
        <div className="z-0 mt-32">
           <Sidebar/>
     
           <div className="mt-8 m-auto w-full rounded-xl  flex flex-col items-center justify-between">
               <h1 className=" font-bold text-xl text-center sans-serif ">Hola  {(authState.userInformation==null) ? '' : authState.userInformation.nombre}! <br/> 
               Ahora con Vespro puedes realizar
                <Typical
                loop={Infinity}
                color={"#000000"}
               
                steps={
                [
                    'compras seguras ✔',
                    5000,
                    'pagos online 💻',
                    5000,
                    'tranferencias rápidas 💳',
                    5000,
                ]
                }
            />
            </h1>
               <img src={Avatar} alt="avatar" className=""/>
           </div>

       

          <Benefits/> 
          <Services />
          <Fotter/>
        </div>

    )
}

export default Home
