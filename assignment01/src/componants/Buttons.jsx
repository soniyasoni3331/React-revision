import React from 'react'

function Buttons(props) {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

export default Buttons