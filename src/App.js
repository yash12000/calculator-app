import React, { useState } from 'react';

const App = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const calculateResult = () => {
        try {
            const result = eval(input);
            setInput(result.toString());
        } catch (error) {
            setInput("Error");
        }
    };

    const clearInput = () => {
        setInput("");
    };

    return (
        <div className="calculator-container">
            <h1>React Calculator</h1>
            <input type="text" value={input} readOnly />
            <div className="button-container">
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("+")}>+</button>
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={() => handleClick("-")}>-</button>
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("*")}>*</button>
                <button onClick={() => handleClick("C")} onDoubleClick={clearInput}>C</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={calculateResult}>=</button>
                <button onClick={() => handleClick("/")}>/</button>
            </div>
        </div>
    );
};

export default App;
