import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleDownClick = () =>{
        let goodText = text.toLowerCase();
        setText(goodText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
        
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const clearText = () =>{
        // let hey = text;
        setText("");
        props.showAlert("Text is cleared!", "success");
    }

    const [text, setText] = useState('');
    // setText("Hey Happy !!");
    return (
        <>
        <div className="container" style={{color:props.mode ==='dark'?'#c9c9c9':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label">{props.heading}</label> */}
                <textarea className="form-control" placeholder='Enter text here!' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#272727':'#c9c9c9', color:props.mode ==='dark'?'#c9c9c9':'#272727'}} id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-secondary mx-2 my-2" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-secondary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-secondary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-secondary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-secondary mx-2 my-2" onClick={clearText}>Clear Text</button>
        </div>
        <div className="container my-2" style={{color:props.mode ==='dark'?'#c9c9c9':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>

            <p>{0.008 * text.split(/[ ]+/).length} minutes needed to read this</p>
            <h2>Preview !</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
