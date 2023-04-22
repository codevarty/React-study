import { useState, useEffect } from "react";

// TO DO LIST
function App() {
  const [toDo, setToDO] = useState("");
  const [toDos, setToDos] = useState([]); // 여러 개의 toDo를 저장할 배열
  const onChange = (event) => setToDO(event.target.value);
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
    </div>
  );
}

export default App;
