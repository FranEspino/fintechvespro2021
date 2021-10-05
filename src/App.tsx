import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./layout/Login/Login";
import Home from "./layout/Home/Home";
import MyAccount from "./layout/MyAccount/MyAccount";
import {  AuthProvider } from "./context/AuthContext";
import Transfer from "./layout/Transfer/Transfer";
import History from "./layout/History/History";
import Logout from "./layout/Logout/Logout";
const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
const App = () => {

  return (
    <AppState>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>
          
          <Route exact path="/cuenta">
            <MyAccount />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/transferir">
            <Transfer />
          </Route>

          <Route exact path="/historial">
            <History />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>

      </BrowserRouter>
    </AppState>

  );
};

export default App;
