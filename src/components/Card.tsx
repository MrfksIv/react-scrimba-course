import React, {useContext} from 'react';
import { ThemeContext } from '../theme-context';

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
    const context = useContext(ThemeContext)
    const styles = {

        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width,
    }

    return (

        <div className={`${context.theme}-theme`} style={styles}></div>


    )
}

Card.defaultProps = {
    cardColor: 'yellow',
    height: 100,
    width: 100
}

export default Card;
