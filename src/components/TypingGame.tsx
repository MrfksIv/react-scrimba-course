import React, { ChangeEvent, useState, useEffect, useRef } from 'react';

const TypingGame = () => {

    const [text, setText] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(5);
    const [gameStarted, setGameStarted] = useState(false);
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        if (timeRemaining > 0 && gameStarted) {
            setTimeout(() => {
                setTimeRemaining(prevTime =>  prevTime - 1);
            }, 1000)
        }
        if (timeRemaining === 0) {
            setGameStarted(false);
        }
    }, [timeRemaining, gameStarted])

    const getTextareaText = (evt: ChangeEvent) => setText((evt.target as HTMLTextAreaElement).value ?? '');

    const calculateWordCount = (text: string): number => {
        const words = text.trim().split(' ').filter(word => word.length > 0);
        return words.length;
    }

    const startGame = () => {

        setGameStarted(true);
        setText('');
        setTimeRemaining(5);
        textAreaRef.current!.disabled = false;
        textAreaRef.current!.focus();
    }

    return (
        <div>
            <h1>How fast can you type?</h1>
            <textarea ref={textAreaRef} onChange={getTextareaText} value={text} disabled={!gameStarted}/>
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={startGame} disabled={gameStarted}>Start</button>
            <h1>Word Count: {calculateWordCount(text)}</h1>
        </div>
    )
}

export default TypingGame;
