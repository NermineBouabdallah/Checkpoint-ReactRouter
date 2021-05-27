import React from 'react'
import{Link} from 'react-router-dom'
import './../App.css';
function Trailer(props) {
    
    return (
       


<div className="trai">
 <Link to="/"><img src="https://store-images.s-microsoft.com/image/apps.64280.14494019834309616.a59ce6b7-8a7c-48ee-8ab8-977eece71157.4b5aeadb-1665-4e2a-9ce8-2df2faa155b9?mode=scale&q=90&h=300&w=300" style={{height:40,width:50,marginTop:20}}></img></Link> 
<h1 className="t"> {props.location.Props.title}</h1> 
<iframe width="860" height="515" src={props.location.Props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    )
}

export default Trailer
