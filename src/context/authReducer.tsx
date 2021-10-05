import { AuthState } from "./AuthContext";
//Debe retornar lo que se especifica en la interface
//La idea del reducer es que basado en la acción que recibimos genere un nuevo estado (No se muta ek estado)

//Crear las acciones
type AuthAction =
    | { type: 'signIn', payload: { userInformation: Object } }
    | { type: 'signOut', payload: { userInformation: Object } }
    | { type: 'getSaldo', payload: { saldo: string } }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isAuthenticated: true,
                userInformation: action.payload.userInformation
            }
        case 'getSaldo':
            return {
                ...state,
                isAuthenticated: true,
                saldo: action.payload.saldo
            }
        case 'signOut':
                return {
                    ...state,
                    isAuthenticated: false,
                    userInformation: action.payload.userInformation
        }
        default:
            return state;
    }






}