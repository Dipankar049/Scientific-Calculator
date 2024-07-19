import { useState, useEffect } from "react";
import '../tailwind.css';

function ChatRoom() {
    const root = document.querySelector("body");
    let [color, setColor] = useState('white');

    const changeColor = (colour) => {
        root.style.backgroundColor = colour;
        console.log(colour);
    }
    return (
        <>
            <div className="bg-amber-500">
            <h1>Switch Background Color</h1>
            <label className="text-zinc-900 italic">Choose color:{' '}</label>
            <select onChange={(e) => {setColor(e.target.value); changeColor(e.target.value)}}>
                <option value="white">white</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="aqua">aqua</option>
            </select>
            <h2>Background Color: {color}</h2>
            </div>       
            
        </>
    )
}
export default ChatRoom;