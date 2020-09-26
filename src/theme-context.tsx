import React, {createContext, PropsWithChildren, useState} from "react";

const { Provider, Consumer} = createContext({
    theme: 'light',
    toggleTheme: () => console.log('Not implemented!')
})


const ThemeContextProvider = (props: PropsWithChildren<any>) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme( theme === 'light' ? 'dark' : 'light');
    return (
        <Provider value={{theme, toggleTheme}}>
            {props.children}
        </Provider>
    );
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
