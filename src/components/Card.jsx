
import React from "react";
function Card({img,heading,para}) {
    return ( <div className="card">
<img src={img}/>
<h1 className="heading">{heading}</h1>
<p className="para">{para}</p>
    </div> );
}

export default Card;