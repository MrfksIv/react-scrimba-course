import React, {createContext, PropsWithChildren, useState} from "react";

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => console.log('Not implemented!')
})


const ThemeContextProvider = (props: PropsWithChildren<any>) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme( theme === 'light' ? 'dark' : 'light');
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export { ThemeContextProvider, ThemeContext };
