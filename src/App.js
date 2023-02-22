import "./styles.css"
import {useState} from 'react'

export default function App() {


  function generatedId(){
    return '_' + Math.random().toString(36).substr(2,9);
  }
  const [todos, setTodo] = useState([])
  const [input , setInput] = useState('')
  const handleSubmite = () =>{
    setTodo((todos)=>todos.concat({
      text:input,
      id: generatedId()
    }))
    setInput('')
  }
  return (
    <div className="App">
      <input type ='text' 
      value={input} 
      placeholder="search"
      onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmite}>Submit</button>
      <ul>
        {todos.map(({text ,id})=>(
          <li key={id}>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    
    </div>
  );
}
