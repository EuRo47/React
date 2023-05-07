
import React from 'react';
import { useState } from 'react';

function Counter() {
    // Сount зберігає поточний стан. Поточний стан useState()
    // SetCount змінює цей стан, написати функцію зміну стану.
    const [count, setCount] = useState(0);

    function handleClick() {
    setCount(count + 1);
    }
    function handleNegativeClick() {
        setCount(count - 1);
        }

    return (
    <div>
    <p>You clicked the button {count} times <br></br>
    Negative times, ha?</p>
    <button onClick={handleClick}>Add</button>
    <button onClick={handleNegativeClick}>Substract</button>
    </div>
    );
    }

export default Counter;
    