import React, {useState} from 'react';


const useToggler = (isOn: boolean) => {
    const [isToggleOn, setToggle] = useState(isOn);

    function toggle() {
        return setToggle(prevValue => !prevValue);
    }

    return {isToggleOn, toggle};
}

export default useToggler;
