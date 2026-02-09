import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AppContextType {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppProviderProps {
    children: ReactNode;
}

export const AppContext = createContext<AppContextType | null>(null);


export const AppProvider = ({ children }: AppProviderProps) => {

    const [dark, setDark] = useState(false)

    return (
        <AppContext.Provider value={{ dark, setDark }}>
            {children}
        </AppContext.Provider>
    )

}

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error('No context given')

    }

    return context
}



