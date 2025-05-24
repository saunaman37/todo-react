import { useState } from 'react';

import './style.css';

export const Todo = () => {
  const [todoText,setTodoText] = useState("");

  const [incompleteTodos,setIncompletetodos] = useState([
    "TODOです1",
    "TODOです2"
  ]);
  const [completeTodos,setcompletetodos] = useState([
    "TODOでした1",
    "TODOでした2"
  ]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos,todoText];
    setIncompletetodos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index) =>{
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    setIncompletetodos(newTodos);
  }

  const onClickComplete = (index) =>{
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);

    const newcompleteTodos = [...completeTodos,incompleteTodos[index]];
    setIncompletetodos(newIncompleteTodos);
    setcompletetodos(newcompleteTodos);

  }

  return(
    <>
    <div className='input-area'>
      <input placeholder='TODOを入力' value = {todoText} onChange={onChangeTodoText}/>
      <button onClick={onClickAdd}>追加</button>
    </div>
    <div className='incomplete-area'>
      <p className='title'>未完了のTODO</p>
      <ul>
      {incompleteTodos.map((todo,index) =>(
          <li key={todo}>  
           <div className='list-row'>
            <p className='tode-item'>{todo}</p>
             <button onClick={() => onClickComplete(index)}>完了</button>
             <button onClick={() => onClickDelete(index)}>削除</button>
           </div>
          </li>
        )
      )}
      </ul>
    </div>
    <div className='complete-area'>
    <p className='title'>完了のTODO</p>
      <ul>
        {completeTodos.map((todo) =>(
          <li key={todo}>  
           <div className='list-row'>
            <p className='tode-item'>{todo}</p>
            <button>戻す</button>
           </div>
          </li>
        )
      )}
      </ul>
    </div>
    </>
  );
};
