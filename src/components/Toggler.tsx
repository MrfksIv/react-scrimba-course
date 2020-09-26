import React, {useState} from 'react';

/**
 * This is the preferred method of using render props instead of using HOCs.
 */
interface TogglerProps {
    render: (toggleValue: boolean, setValue: () => void) => JSX.Element;
}
const Toggler = (props: TogglerProps) => {
    const [toggleValue, setToggleValue] = useState(true);

    const toggle = () => setToggleValue(!toggleValue)

    return (
        <div>
            {props.render(toggleValue, toggle)}
        </div>
    )
}

export default Toggler;
