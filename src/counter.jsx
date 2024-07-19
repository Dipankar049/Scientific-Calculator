import { useState } from "react";

function counter() {
    // let count = 5;
    let [count, setCounter] = useState(5);
    const increment = () => {
        if(count >= 20) {
            alert("You have reach Maximum limit 20");
            return;
        }
        setCounter(++count);
    }
    const decrement = () => {
        if(count <= 0) {
            alert("You have reach Minimum limit 0");
            return;
        }
        setCounter(--count);
    }
    
    return (
        <>
            <div className="container my-3">
                <h1>TAL = {count}</h1>
                <button className="btn2" onClick={increment}>+</button>
                <button className="btn2" onClick={decrement}>-</button>
            </div>
            
        </>
    )
}

export default counter;