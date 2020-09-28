import React, {useContext} from "react";
import { ThemeContext } from "../theme-context";
import useToggler from '../customHooks/useToggler';

function Menu(props: any) {

    const context = useContext(ThemeContext);
    const {isToggleOn, toggle} = useToggler(false);
    return (

        <div className={`${context.theme}-theme`}>
            <h3>Menu</h3>
            <button onClick={toggle}>{`${isToggleOn ? 'Hide' : 'Show'}`}</button>
            <nav style={{display: `${isToggleOn? 'block' : 'none'}`}}>
                <h6>This is the menu</h6>
                <a>Bla bla</a>
            </nav>
            <button onClick={context.toggleTheme}>Switch theme</button>
        </div>


    )
}

export default Menu;
