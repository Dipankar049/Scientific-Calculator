import React from 'react'
import buttonImage from '../assets/mode.svg';

export default function Theme() {
    

    const body = document.querySelector("body");
    // const divs = document.querySelectorAll("newsDiv");
    const switchTheme = () => {
        if(body.style.backgroundColor == "") {
            body.style.backgroundColor = "black";
            body.style.color = "white";

            // divs.forEach(div => {
            //     div.style.backgroundColor = "black";
            //     div.style.color = "white";
            //     div.style.border = "2px solid white";
            // })
            
            // props.showAlert("Dark mode Enabled", "Success");
        } else {
            body.style.backgroundColor = "";
            body.style.color = "black";

            // divs.forEach(div => {
            //     div.style.backgroundColor = "white";
            //     div.style.color = "black";
            //     div.style.border = "1 px solid black";
            // })
            
            // props.showAlert("Light mode Enabled", "Success");
        }   
    }

    
  return (
    <>
        
        <button className="theme" onClick={switchTheme} style={{width: '45px',height: '45px', border: 'none',borderRadius: '50%', margin: '0px 10px 0px 10px'}}><img src={buttonImage} alt="Change theme" style={{width: '30px',height: '30px'}}/></button>
    </>
  )
}
