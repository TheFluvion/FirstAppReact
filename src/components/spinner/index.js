import React from "react";
import './style.css'
import image from './../../logo192.png'

export default function Spinner(){
    return <div className="ring">
        <img className='spinner' alt='im-gif' src={image}></img>
    </div>
}