// import Button from './Button';
// import styles from './App.module.css';
import { useState, useEffect} from "react";

function App() {
  // state가 변경 될 때 마다 컴포넌트가 리렌더링 된다.
  // 즉 이 함수가 실행되는 것이다.
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick= () => setCount((prev) => prev + 1);

  const onChange = (event) => setKeyword(event.target.value);
  // console.log('I run all the time') // 버튼을 클릭할 때 마다 실행
  useEffect(() => {
    console.log('I run only once') // 한 번만 실행
  },[]); // 배열 안에 인자가 없으므로 단 한번만 실행 된다.

  useEffect(()=> {
      console.log("I run when 'keyword' changes");
  },[keyword]); // keyword가 변경 될 때 마다 실행 이때 맨처음 로드가 될 때도 실행이 된다.

  useEffect(()=> {
    console.log("I run when 'count' changes");
  },[count]); // count가 변경 될 때 마다 실행

  useEffect(()=> {
    console.log("I run when 'keyword & count' changes");
  },[count, keyword]) // count와 keyword가 변경 될 때 마다 실행 배열 안에 인자는 여러개를 넣어도 된다.
    return (
    <div>
      <input value={keyword} onChange={onChange} placeholder="Search hear..."/>
      <h1>{count}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
