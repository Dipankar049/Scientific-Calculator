import React, {useState} from 'react'

export default function TextForm(props) {
    let [text, setText] = useState("");
    const convertToUpper = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Upeer Case", "Success");
    }

    const convertToLower = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case", "Success");
    }
    
    let [noOfWord, countWord] = useState(0);
    let wordCounter = (text) => {
        if(text.length == 0) {
            countWord(0);
        } else {
            let str = text;
            while(str.includes("  ")) {
                str = str.replaceAll("  ", " ");
            }
            str = str.trim();
            if(!str[0]) {
                countWord(str.split(" ").length -1);
            } else {
                countWord(str.split(" ").length);
                console.log("in 0 pos: ", str[0]);
            }
            
        }
    }

    const removeSpace = () => {
        while(text.includes("  ")) {
            text = text.replaceAll("  ", " ");
            setText(text);
        }
        setText(text.trim());
        props.showAlert("Extra space removed", "Success");
    }

    const capitalize = () => {
        let str = text[0].toUpperCase() + text.slice(1);
        let arr = text.split(".");
        let strCap = "";
        for(let i = 1; i < arr.length; i++) {
            strCap += arr[0][0].toUpperCase() + arr[0].slice(1);
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        wordCounter(event.target.value);
    }
    return (
        <>
        <div className="m-6">
            <h1>{props.heading}</h1>
            <div className="">
            <label htmlFor="formGroupExampleInput" className="text-3xl">Enter your Text:</label>
            <br></br>
            <textarea className="mt-4 ml-2 border" id="formGroupExampleInput" value={text} onChange={handleOnChange} rows="8" cols="150"/>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={capitalize}>Capitalize</button>
            <button className="btn btn-primary mx-2 my-1" onClick={convertToUpper}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={convertToLower}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={removeSpace}>Remove extra Space</button>
        </div>
        <div className="container">
            <h1>Your text here</h1>
            <p>{noOfWord} words and {text.length} charecters</p>
            <p>{0.008 * noOfWord} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
  )
}