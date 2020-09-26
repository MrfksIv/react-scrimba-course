import React from 'react';
import { ThemeContextConsumer } from "../theme-context";

/**
 * Notice the use of Card.defaultProps to assign default value properties
 * to some or all of the properties defined by the functional component.
 */
interface CardProps {
    cardColor?: string;
    height?: number;
    width?: number;
}


function Card(props: CardProps) {
    const styles = {

        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width,
    }

    return (
        <ThemeContextConsumer>
            {
                ({theme}) => (
                    <div className={`${theme}-theme`} style={styles}></div>
                )
            }
        </ThemeContextConsumer>

    )
}

Card.defaultProps = {
    cardColor: 'yellow',
    height: 100,
    width: 100
}

export default Card;
