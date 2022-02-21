import React, {useState} from 'react'
import './App.css';

function App() {

  const [items, setItems] = useState([
    {name:"Buy Shopping", priority: false},
    {name:"Clean bathroom", priority: true},
    {name:"Car's MOT", priority: false}
  ])

  const [newItem, setNewItem] = useState("")

  const [inputPriority, setinputPriority] = useState(false)

  let radioOption = false

  const itemNodes = items.map((item, index)=>{
    return(
      <li key={index} className={item.priority ? "high" : "low"}>
        <span>{ item.name }</span>
      </li>
    )
  })

  const handleItemInput = (event) => {
    setNewItem(event.target.value)
  }

  const handleRadio = () => {
    setinputPriority(radioOption)
  }

  const saveNewItem = (event) => {
    event.preventDefault();
    const copyItems = [...items]
    copyItems.push({name: newItem, priority: inputPriority})
    setItems(copyItems)
    setNewItem("")
  }

  return (
    <>
      <h1>ToDos's</h1>
      <form onSubmit={saveNewItem}>
        <input id="new-item" type="text" value={newItem} onChange={handleItemInput}/>
        <label>
          <input 
            type="radio"
            value="true"
            checked={radioOption === true}
            onChange={handleRadio}
          />
          High
        </label>
        <label>
          <input 
            type="radio"
            value="true"
            checked={radioOption === false}
            onChange={handleRadio}
          />
          Low
        </label>
 
        <input type="submit" value="Save Item" />
      </form>
      <ul>
        {itemNodes}
      </ul>
    </>
  );
}

export default App;
