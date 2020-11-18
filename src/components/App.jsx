import React, { useState } from "react";

function App() {
/*function Task(props)
{
return (
<div><li style={{textDecoration:props.isCancelled?"line-through":"None"}} > {props.text} </li>
</div>);
}*/


function Task({ task, index, items}) {
    return (
        <div><li style={{textDecoration:task.isCancelled?"line-through":"None"}} > {task.text} </li>

            <button onClick={()=>completeTask(index)}>Complete</button>
        </div>
    );
}
 
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const now=new Date().toDateString();
  const [curr,setDate]=useState(now);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function changedate()
  {
    const d=new Date().toDateString();
    setDate(d);
  }
  function addItem() {
    setItems(prevItems => {
      return [...prevItems, {text:inputText, isCancelled:false} ];
    });
    console.log(items);
    setInputText("");
  }
  function completeTask (index) {
    const newTasks =[...items];
    newTasks[index].isCancelled =true;
    setItems(newTasks);
}
  return (
    <div className="container">
    <h1>{curr}</h1>
      <div className="heading">
        <h1>To-Do List </h1>
        
        
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map( (task,index) =><Task task={task} index={index} key={index}/> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
