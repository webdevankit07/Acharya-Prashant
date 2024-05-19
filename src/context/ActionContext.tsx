'use client';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type ActionContextType = {
    bottomHeaderSticky: boolean;
    setBottomHeaderSticky: Dispatch<SetStateAction<boolean>>;
    setSticky: (value: boolean) => void;
    menuBarActive: boolean;
    setMenuBarActive: Dispatch<SetStateAction<boolean>>;
};

const ActionContext = createContext<ActionContextType | null>(null);

const ActionContextProvider = ({ children }: { children: ReactNode }) => {
    const [bottomHeaderSticky, setBottomHeaderSticky] = useState(false);
    const [menuBarActive, setMenuBarActive] = useState(false);

    const setSticky = (value: boolean) => {
        if (menuBarActive) return;
        setBottomHeaderSticky(value);
    };

    return (
        <ActionContext.Provider
            value={{ bottomHeaderSticky, setBottomHeaderSticky, menuBarActive, setMenuBarActive, setSticky }}
        >
            {children}
        </ActionContext.Provider>
    );
};

export const useAction = () => {
    const context = useContext(ActionContext);
    if (!context) {
        throw new Error('ActionContext must be used within an ActionContextProvider');
    }

    return context;
};

export default ActionContextProvider;
