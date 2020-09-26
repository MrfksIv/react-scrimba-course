import React, {PropsWithChildren} from 'react';
import { ThemeContextConsumer } from "../theme-context";
/**
 * All components have this implicit property called 'children' as part of their properties.
 * This is basically anything that comes between opening and closing tags of the component.
 * In the example below the <h1> and <p> are going to be passed as the props.children of the CTA component:
 * <CTA border='1px solid blue'>
 *     <h1> This is part of the CTA's children </h1>
 *     <p> This too! </p>
 * </CTA>
 */
interface CtaProps {
    border: string;
}
function CTA(props: PropsWithChildren<CtaProps>) {

    return (
        <ThemeContextConsumer>
            {
                ({theme}) => (
                    <div className={`${theme}-theme`} style={{'border': props.border}}>{props.children}</div>
                )
            }
        </ThemeContextConsumer>

    )
}

export default CTA;
