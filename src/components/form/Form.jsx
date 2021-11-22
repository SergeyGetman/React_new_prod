import React from "react";


export default function Form(props) {
  console.log(props)
  const {values, handleChange, handleSubmit, elements} = props

  return (
    <div>
      <h1>Forms</h1>
      {elements.map(element =>
        <element.component
          key={element.name}
          name={element.name}
          type={element.type}
          value={values[element.name] || ""}
          onChange={handleChange}
        />

      )}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}