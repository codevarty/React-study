import "./App.css";
import { useState, useEffect } from "react";

// TO DO LIST
function App() {
  const [toDo, setToDO] = useState("");
  const [toDos, setToDos] = useState([]); // 여러 개의 toDo를 저장할 배열
  const onChange = (event) => setToDO(event.target.value);
  // 요소를 삭제하는 함수
  const onDelete = (event) => {
    setToDos((currentValue) => {
      // console.log(event.target.parentNode)
      currentValue.splice(event.target.parentNode.id, 1); // 부모 요솟의 id를 가져와서 해당 요소를 삭제한다.
      return [...currentValue]; // toDOs의 에 반영된다.
    });
  }
  const onSubmit = (event) => {
    event.preventDefault();
    // toDo가 비어있으면 종료한다.
    if (toDo === ""){
      return;
    }
    setToDO("");
    //...toDos는 toDos의 모든 값을 배열에 추가한다.
    // ToDos에 toDo를 추가한다.
    // currentValue는 현재의 toDos를 의미한다.
    setToDos((currentValue) => [toDo, ...currentValue]);
  }
  // console.log(toDos);
  return (
    <div>
      <h1>My TO Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          value={toDo} 
          onChange={onChange} 
          type="text" 
          placeholder="Write your to do..." 
        />
      <button>Add TO DO</button>
      </form>
      <hr/>
      <div className="list-container">
        {toDos.map((item, index) => <div className="list" id={index} key={index}>
          ({index+1})
          {" "+item}
          <button /*remove this parents tags */ onClick={onDelete}>delete</button>
          </div>)}
      </div>
    </div>
  );
}

export default App;
