import React from "react";

export default function Main({item}){
    console.log(item.img);

return(
    <div>
            <main>
        <div className="left">
           {item.position ?  <img className="paris" src={item.img}></img>
           :<img  src={item.img}></img> }
        </div>
        <div className="right">
            <div className="location">
            <img src={item.locationLogo} width="20px"/>
            <span>{item.location}</span>
            <a target="_blank" href={item.maplink}>
                View on Google Maps</a>
            </div>
            <h2>{item.title}</h2>
            <span className="startdate">{item.startdate}</span> - <span className="enddate">{item.enddate}</span>
            <p>{item.description}</p>
                

        </div>
        
        
    </main>
    
    
    </div>


)

}