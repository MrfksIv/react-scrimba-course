import React from "react";
import Toggler from "./Toggler";
import { ThemeContextConsumer } from "../theme-context";

function Menu(props: any) {

    return (
        <ThemeContextConsumer>
            {
                ({theme, toggleTheme}) => (
                    <Toggler render={
                        (toggleValue , toggle) => (
                            <div className={`${theme}-theme`}>
                                <h3>Menu</h3>
                                <button onClick={toggle}>{`${toggleValue ? 'Hide' : 'Show'}`}</button>
                                <nav style={{display: `${toggleValue? 'block' : 'none'}`}}>
                                    <h6>This is the menu</h6>
                                    <a>Bla bla</a>
                                </nav>
                                <button onClick={toggleTheme}>Switch theme</button>
                            </div>
                        )
                    } />
                )
            }
        </ThemeContextConsumer>

    )
}

export default Menu;
