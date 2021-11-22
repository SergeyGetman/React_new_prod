import React from "react";

export default function View(props) {
  const {elements, values } = props
  return(
    <div>
      <p>One time</p>
      {elements.map(element =>
      <p key={element.name}>{element.name} - {values[element.name]}</p>
      )}
    </div>
  )
}