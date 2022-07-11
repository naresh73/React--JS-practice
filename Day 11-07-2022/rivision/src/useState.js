import { useState } from "react";

export default function usest() {
    const [varr, setVarr] = useState(100);

    function increase() {
        setVarr(varr - 10);
    }

    function decrease() {
        setVarr(varr + 10);
    }

    function reset() {
        setVarr(0);
    }

    return (
        <div >
            <p>{varr}</p>
            <button onClick={increase}>-10</button>
            <br />
            <button onClick={decrease}>+10</button>
            <br />
            <button onClick={reset}>reset</button>
        </div>
    );
}