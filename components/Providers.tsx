"use client";

import { SettingsContextProvider } from "@/contexts/Settings";
import { AuthContextProvider } from "@honzachalupa/admin";
import { DesignSystemContextProvider } from "@honzachalupa/design-system";
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";
import { AppContextProvider } from "../contexts/App";

interface IProps {
    children: ReactNode;
}

export const Providers: React.FC<IProps> = ({ children }) => (
    <>
        <DesignSystemContextProvider>
            {/* TODO: Change namespaceId */}
            <AuthContextProvider namespaceId="travel-app">
                <AppContextProvider>
                    <SettingsContextProvider>
                        {children}
                    </SettingsContextProvider>
                </AppContextProvider>
            </AuthContextProvider>
        </DesignSystemContextProvider>

        <Analytics debug={false} />
    </>
);
