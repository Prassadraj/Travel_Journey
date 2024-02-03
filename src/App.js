
import './App.css';
import React from 'react';
import Main  from './component/Main';
import Nav from "./component/Nav"
import data from './data';

 export default function App(){
  let shareData=data.map(item=>{
    return(
      <Main 
      // id={item.id}
      // {...item}
      item={item}
      />
)
  })

  return(
    <div>
     <Nav/>
     {shareData}
    </div>
    
  )
}



