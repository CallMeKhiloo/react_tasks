import { createContext } from "react";

const AuthContext = createContext({ user: null, loginUser: () => {} });

export default AuthContext;
