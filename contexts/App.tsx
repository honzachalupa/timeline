"use client";

import { AuthContext, IUser } from "@honzachalupa/admin";
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface IAppContext {
    user: IUser | null | undefined;
    isLoading: boolean;
}

const initialContext: IAppContext = {
    user: undefined,
    isLoading: true,
};

export const AppContext = createContext<IAppContext>(initialContext);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const { user } = useContext(AuthContext);

    const [context, setContext] = useState<IAppContext>(initialContext);

    useEffect(() => {
        setContext((prevContext) => ({
            ...prevContext,
            user,
        }));
    }, [user]);

    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
};
