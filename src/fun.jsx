import { useState } from "react";

// function fun() {
//     let {counter, setCounter} = useState(100);
//     return (
//         <>
//         <h2>Count = {counter}</h2>
//         <button onClick={()=>setCounter(counter++)}>Change</button>
//         </>
//     )
// }

function fun() {
    let counter = 5;
    return (
        <>
        <h2>count = {counter}</h2>
        <button onClick={() => {
            counter++;
            console.log(counter);

            }}>Change</button>
            
        </>
    )
}

export default fun;