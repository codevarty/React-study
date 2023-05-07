# React Hook
## 정의
- React Hook은 React 16.8 버전에 새로 추가된 기능이다.
- 함수형 컴포넌트에서도 성태 관리를 할 수 있도록 해준다.

## 특징
- 함수형 컴포넌트에서도 상태 관리를 할 수 있다.
- 코드의 가독성과 재사용성을 높여준다.
- useState를 이용하여 상태관리가 가능하다.
- useEffect를 이용하여 생명주기에 따른 작업 처리가 가능해 진다.(mount 될 때, unmount 될 때, update 될 때, 상태가 변경될 때 등)

## Hook의 종류
- useState
- useEffect
- useContext
- useReducer
- useMemo
- useCallback
- useRef

## useState
- 가장 기본적인 Hook
- 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
- 반환값은 배열 형태로 상태와, 그 상태를 변경하는 함수이다.
- useState는 여러번 사용이 가능하다.
- 예제 코드
  ```javascript
  import React, { useState } from 'react';

  const Counter = () => {
    const [value, setValue] = useState(0); //초기값 0 지정
    return (
      <div>
        <p>
          현재 카운터 값은 <b>{value}</b>입니다.
        </p>
        // 버튼 클릭시 value의 값이 1증가한다.
        <button onClick={() => setValue(value + 1)}>+1</button>
        //버튼 클릭시 value의 값이 1감소한다.
        <button onClick={() => setValue(value - 1)}>-1</button>
      </div>
    );
  }
  ```
  App.js
  ```javascript
  import React from 'react';
  import Counter from './Counter';
  const App = ()=> {
    //Counter 컴포넌트를 불러온다.
    return <Counter />;
  }
  export default App;
  ```
## useEffect
- 리엑트 컴포넌트가 랜더링 될 떄 특정 작업을 수행하는 Hook
- 예제 코드
  ````javascript
  import React, { useState, useEffect } from 'react';

  const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
      // 랜더링이 완료된 후 실행 된다.
      console.log('렌더링이 완료되었습니다!');
      console.log({
        name,
        nickname
      });
    });

    const onChangeName = e => {
      setName(e.target.value);
    };

    const onChangeNickname = e => {
      setNickname(e.target.value);
    };

    return (
      (...)
    );
  };

  export default Info;
  ````
- 마운트(초기 랜더링) 때만 실행
  - mount : 컴포넌트가 처음 나타날 때(초기 랜더링)
  - unmount : 컴포넌트가 사라질 때
  ```javascript
  useEffect(() => {
    console.log('마운트 될 때만 실행됩니다.');
  }, []); //두번째 인자는 변경되는 값이 들어간다.
  // 빈 배열([])일 경우 마운트 될 때만 실행된다.
  ```
- 특정 값이 업데이트 될 때마다 실행
  ```javascript
  useEffect(() => {
    console.log(name);
  }, [name]); //name 값이 변경될 때마다 실행된다.
  ```
- 언마운트 또는 업데이트 직전에 실행
  ````javascript
  useEffect(() => {
    //컴포넌트가 랜더링 될 때 실행
    console.log('effect');
    console.log(name);
    // cleanup 함수
    // 언마운트 또는 업데이트 직전에 실행된다.
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  });
  ````
## useContext
- 함수형 컴포넌트에서 Context를 편하게 사용할 수 있게 해준다.
- 예제 코드
  ```javascript
  import React, { createContext, useContext } from 'react';

  const ThemeContext = createContext('black');

  const ContextSample = () => {
    //스타일의 값을  변경할 때 주로 사용된다.
    const theme = useContext(ThemeContext);
    const style = {
      width: '24px',
      height: '24px',
      background: theme
    };
    return <div style={style} />;
  };

  export default ContextSample;
  ```
## useReducer
- useState보다 더 다양한 상황에 따라 다양한 상태를 다른 값으로 업데이트 할 때 사용
- 현재 상태와, 업데이트를 위해 필요한 정보를 담은 액션(Action) 값을 전달 받아 새로운 상태를 반환하는 함수
- 리듀서를 사용할 때 아래의 형식으로 사용해야 한다.리듀서 함수에서 새로운 상태를 만들 때 불변성을 지켜야 한다.
  - 불변성: 데이터 수정, 삭제, 추가 시 기존의 값을 직접 수정하지 않고, 새로운 값을 생성하여 사용하는 것
  - 유지보수에 이점을 남긴다.
```javascript
function reducer(state, action) {
  // 새로운 상태를 만드는 로직
  return {...} // 불변성을 지키면서 새로운 상태를 반환
}
```
```javascript
// action 값 예시
{
  type: 'INCREMENT',
  // 다른 값들이 필요하다면 추가로 들어간다.
  // ...
}
```
- useState Counter 험수를 useReducer 형식으로 재구성
```javascript
import React, { useReducer } from 'react';

function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      //아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter;
```
  - 첫 번쨰 파라미터는 리듀서 함수가 들어간다.
  - useReducer를 사용할 때 두 번째 파라미터로 초기 상태를 넣어줄 수 있다.
```javascript
// state는 현재 상태
// dispatch는 액션을 발생시키는 함수
const [state, dispatch] = useReducer(reducer, { value: 0 });
```
- 장점
  - 컴포넌트 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.
## useMemo
- 함수에서 발생하는 연산을 최적화 할 수 있다.
- 랜더링 하는 과정에서 특정 값이 바뀔 때만 실행
- 이전에 연산했던 값을 기억하고 있음
- 예제코드
```javascript
import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };
  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  // useMemo를 사용하여 list 배열의 값이 바뀔 때만 getAverage 함수가 호출된다.
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
```
## useCallback
- useMemo와 비슷한 함수
- 주로 랜더링 성능을 최적화할 때 사용
- 이밴트 핸들러 함수를 필요할 때만 생성할 수 있다.
- 위의 useMemo 함수에서 사용되는 onChange와 onInsert 함수를 useCallback으로 재구성
```javascript
import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
  const onInsert = useCallback(
    e => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
    },
    [number, list]
  ); // number 혹은 list 가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange}  />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
```
  - useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열을 넣으면 된다.
  - 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 한다.
  - 컴포넌트가 처음 렌더링 될 때만 함수를 생성하고, 그 이후에는 재사용하게 된다.

```javascript
useCallback(() => {
  console.log('hello world!');
}, [])

useMemo(() => {
  const fn = () => {
    console.log('hello world!');
  };
  return fn;
}, [])
```
  - 위의  두 코드의 실행 결과는 동일하다.
  - 숫자, 문자열, 객체 처럼 일반 값 재사용에서는 useMemo를 사용하고, 함수를 재사용하고 싶을 때는 useCallback을 사용한다.

## useRef
- 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해준다.
  - ref란 어떤 DOM을 선택할지 정하는 것
```javascript
import React, { useState, useMemo, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
  const onInsert = useCallback(
    e => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      //current 값이 실제 엘리먼트를 가리킴
      inputEl.current.focus();
    },
    [number, list]
  ); // number 혹은 list 가 바뀌었을 때만 함수 생성


  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
```