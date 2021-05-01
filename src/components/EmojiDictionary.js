import React from "react"

export default function Emojis(props)
{
return(
  <div className="box"><dl className="dict">
     
     <div className="items"><dt><h1 id="title"><span>{props.id}</span>. {props.title}</h1></dt>
   <dd><h1 className="emoji">{props.emoji}</h1><h4 className="meaning">{props.meaning}</h4></dd>
   </div>
   </dl></div>

)
}