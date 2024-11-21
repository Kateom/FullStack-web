import { createContext, useContext, useState } from "react";

export const Authcontext = createContext();

const Authprovider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));

  const storetokenInLs = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  // tackling the logout functionality

  let isloggedIn = !!token; 

  const LogoutUser= () => {
    setToken(""); 
    return localStorage.removeItem('token');
  };

  return (
    <Authcontext.Provider value={{ isloggedIn , storetokenInLs , LogoutUser}}>
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => {
  const authcontextvalue = useContext(Authcontext);
  if (!authcontextvalue) {
    throw new Error("useAuth must be used within an Authprovider");
  }
  return authcontextvalue;
};

export default Authprovider;
