import React from "react";
import { withToggler } from "./withToggler";


function Menu(props: any) {
    console.log('##', props)
    return (
        <div>
            <h3>Menu</h3>
            <button onClick={props.toggle}>{`${props.on ? 'Hide' : 'Show'}`}</button>
            <nav style={{display: `${props.on ? 'block' : 'none'}`}}>
                <h6>This is the menu</h6>
                <a>Bla bla</a>
            </nav>
        </div>
    )
}

export default withToggler(Menu, {defaultVal: false});
