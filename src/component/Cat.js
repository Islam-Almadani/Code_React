import React from "react";
import '../App.css';

function Cat(props = {name: 'mohammed' ,age : 18 }){
    return(
        <div>
            <img src={props.url} className='img'></img>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
        </div>
    )
}

export default Cat