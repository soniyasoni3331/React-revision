import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Person from './componants/Person.jsx'
import Buttons from './componants/Buttons.jsx'
import Header from './componants/Header.jsx'
import List from './componants/List.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Person name="Soniya" age="20"/>
    <Buttons text="Click me!" onClick={()=>{
      console.log("Button was clicked!")
    }}/>
    <Header title="Heading"/>
    <List items={['apple', 'banana', 'Orange']}/>
  </React.StrictMode>,
)
