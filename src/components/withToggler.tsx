import React, {ComponentType, PropsWithChildren, useState} from 'react';

/**
 * An example of a toggler implemented as a Higher Order Component (HOC).
 */
interface ToggleOptions {
    defaultVal: boolean;
}
interface ToggleProps {
    component: ComponentType<any>;
    options: ToggleOptions;
}

const Toggler = (props: PropsWithChildren<ToggleProps>) => {
    const [toggleValue, setToggleValue] = useState(props.options.defaultVal);
    const toggle = () => setToggleValue(!toggleValue);

    const Component = props.component;
    return (
        <Component on={toggleValue} toggle={toggle} />
    )
}

export function withToggler<P extends ToggleProps>(component: ComponentType<P>, options: ToggleOptions) {
    const Component = component;

    return (props: any) => {
        return (
            <Toggler component={Component} options={options} {...props}/>
        )
    }
}
