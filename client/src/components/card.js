import React, { useEffect, useState } from "react";

function Card(props) {
    
    const target = e.target;
    e.dataTransfer.setData('card_id',target.id);
    setTimeout(()=>{
        target.style.diplay = "none"
    },0 );

    const dragOver = e => {
        e.stopPropagation();
    }

  return (
    <div 
        className={props.className}
        id={props.id}
        onDrop={drop}
        onDragOver={dragOver} 
            >
                {props.children}
    </div>
  );
}

export default Card;
