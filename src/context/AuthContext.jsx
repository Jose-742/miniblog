import { useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({children, value}) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

//seria o hook, mas esta sendo chamado no proprio contexto
export function useAuthValue() {
    return useContext(AuthContext);
}