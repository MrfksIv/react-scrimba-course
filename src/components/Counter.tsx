import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';
/**
 *
 * The useEffect() hook allows us to have access to the class component lifecycle methods of:
 * - componentDidMount
 * - componentDidUpdate
 * - componentWillUnmount
 *
 * But a more intuitive way to think about it is as a function that causes side-effects such as:
 * - Network requests that fetch data
 * - Manual DOM manipulation
 * - Event listeners or timeouts/intervals
 */
const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const [color, setColor] = useState("");

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    // the second argument of useEffect is an array containing the list of variables that useEffect
    // should watch for changes. In the case below, it will only run when the `count` variable changes
    useEffect(() => {
        setColor(randomcolor())
    }, [count]) ;

    // if we want useEffect to run only once at the beginning of the first render (i.e. similar to componentDidMount())
    // we can just pass it an empty array as the second argument. (Note: Similar to useState, useEffect can be called
    // multiple times).
    //
    useEffect(() => {
        const intervalId = setInterval(() => setCount(prevCount => prevCount + 1), 1000);

        // the return method is used to replicate the componentDidUnmount() behaviour. When the Component is
        // destroyed, this function will be called. In this case we use it to clear the interval, otherwise it
        // will keep running, and a new interval will be created each time the Component is re-rendered causing
        // unexpected behaviour and memory leaks.
        return  () => clearInterval(intervalId);
    })

    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;
