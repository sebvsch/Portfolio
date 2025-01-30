import { createContext, FC } from "react";

type AppContextType = {

}

export const AppContext = createContext<AppContextType>(
    {} as AppContextType
);


export const AppContextProvider: FC = ({ children }: any) => {




    return (
        <AppContext.Provider value={{
        }}>
            {children}
        </AppContext.Provider>
    );
}
