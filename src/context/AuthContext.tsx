
import axios from "axios";
import { createContext, useReducer } from "react"
import { LoginData } from "../interfaces/appInterfaces";
import { authReducer } from "./authReducer";

export interface AuthState{ 
    isAuthenticated: boolean;
    userInformation: any;
    saldo: string;
    token: string;
}
 
export const  authInitialState: AuthState ={
    isAuthenticated :false,
    userInformation: null,
    saldo: '',
    token: '',
}

//Lo que el contexto proporciona a los hijos (Como luce y que expone)
export interface AuthContextProps{
    authState: AuthState;
    userInformation: any;
    saldo: string,
    singIn: (userInfo: LoginData) => void;
    singOut: (userInfo: LoginData) => void;
    getSaldo : (idpersona:number) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

//Proveedor del estado High Order Component
export const AuthProvider = ({children}: {children:JSX.Element}) => {
    //El reducer ayuda a mantener el estado de la aplicación y realizar las operaciones de cambio de estado
    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const singIn = async(userInfo: LoginData) => {
        const {dni,clave} = userInfo
        try {
            const response = await axios.get(`https://fintechapivespro.herokuapp.com/api/login?dni=${dni}&clave=${clave}`);
            const data = await response.data;

            if(data.length>0){
                dispatch({
                    type: 'signIn',
                    payload: {
                        userInformation: data[0]
                    }
                });
            }   

          } catch(error) {
            console.log(error)
          }
    }

    const singOut = () => {
    
                dispatch({
                    type: 'signOut',
                    payload: {
                        userInformation: {}
                    }
                });
        
    }



    const getSaldo = async(idpersona:number) => {
     
        try {
            const response = await axios.get(`https://fintechapivespro.herokuapp.com/api/saldo?idpersona=${idpersona}`);
            const data = await response.data;
 
            if(data.length>0){
                dispatch({
                    type: 'getSaldo',
                    payload: {
                        saldo: data[0]
                    }
                });
            }   

          } catch(error) {
            console.log(error)
          }
    }


    return (
        <AuthContext.Provider value={{
          
            authState,
            saldo: authState.saldo,
            userInformation: authState.userInformation,
            singIn,
            singOut,
            getSaldo
        }}>
            {children}
        </AuthContext.Provider>
    )
}