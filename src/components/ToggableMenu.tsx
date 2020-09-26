import React, {useState} from 'react'

const Menu = () => {

    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <h3>Menu</h3>
            <button onClick={() => setToggle(!toggle)}>{`${toggle ? 'Hide' : 'Show'}`}</button>
            <nav style={{display: `${toggle ? 'block' : 'none'}`}}>
                <h6>This is the menu</h6>
                <a>Bla bla</a>
            </nav>
        </div>
    )
}

export default Menu;
