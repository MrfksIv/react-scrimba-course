import React, {useContext} from "react";
import Toggler from "./Toggler";
import { ThemeContext } from "../theme-context";

function Menu(props: any) {

    const context = useContext(ThemeContext);
    return (

        <Toggler render={
            (toggleValue , toggle) => (
                <div className={`${context.theme}-theme`}>
                    <h3>Menu</h3>
                    <button onClick={toggle}>{`${toggleValue ? 'Hide' : 'Show'}`}</button>
                    <nav style={{display: `${toggleValue? 'block' : 'none'}`}}>
                        <h6>This is the menu</h6>
                        <a>Bla bla</a>
                    </nav>
                    <button onClick={context.toggleTheme}>Switch theme</button>
                </div>
            )
        } />

    )
}

export default Menu;
