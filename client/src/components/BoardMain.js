import React, { useEffect, useState } from "react";
import axios from 'axios';

import Board from "./Board"
import Card from "./card"

function BoardMain(props) {

    const [data, setData] = useState([]);
  useEffect(() => {
    fetchData()
}, []);
async function fetchData(){
  await axios
  .get("http://localhost:5000/Tasks")
  .then(function (response) {
    setData(response.data);
    console.log(response.data);
  });
}
const display = data.map((card)=>{
    return(
    <Card id={card.id} className="card" draggable="true">
        <p>{card.title}</p>
    </Card>)
})

  return (
    <Board id= "board-1" className="board" >
        {display}
    </Board>
  );
}

export default BoardMain;
