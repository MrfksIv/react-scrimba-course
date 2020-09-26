import React, { Component, ComponentType, FC } from 'react';

interface WithExtraPropProps {
    anotherProp: string;
}

export function withExtraPropAdded<P extends WithExtraPropProps>(component: ComponentType<P>) {
    const anotherProp = 'la la la la'
    const Component = component;
    return (props: any) => (
        <Component
            anotherProp={anotherProp}
            {...props}
        />
    )
}


