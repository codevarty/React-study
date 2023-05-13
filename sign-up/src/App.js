/* 회원가입 페이지
  1. 먼저 로그인 페이지를 화면에 보여준다.
  2. 로그인 페이지에는 아이디(이메일) 입력창과 비밀번호 입력창이 있다.
  3. 입력 창 밑에는 로그인 버튼이 있다.  가외에 조그마한  아이디 저장 체크박스가 있다.
  4. 맨 밑에는 아이디 찾기, 비밀번호 찾기, 회원가입 버튼이 있다.
 */
import { useState } from 'react';
import './App.css';
import { checkId, checkPw } from './components/SignUpForm';
function App() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  // console.log(setId)

  const onChangeId = (e) => {
    // console.log(e.target.value)
    setId(e.target.value);
  }
  const onChangePw = (e) => {
    // console.log(e.target.value)
    setPw(e.target.value);
  }
  // 이 함수는 form 태그의 onSubmit 이벤트에 등록되어 있다.
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(id, pw);
    if (id ==='' || pw ==='') {
      alert('아이디 및 비밀번호를 입력하세요');
      return;
    }
    if (checkId(id) && checkPw(pw)) {
      console.log(id, pw)
    } else {
      alert('아이디 및 비밀번호를 확인하세요');
    }
  }
  return (
    <div className="content">
      <div className="login">로그인</div>
      <form onSubmit={onSubmit}>
        <div className="panel">
          <div id="id_line_wrap">
            <input id="id"type="text" value={id} onChange={onChangeId}/>
          </div>
          <div id="passwd_line_wrap">
          <input id="pw" type="password" value={pw} onChange={onChangePw} />
          </div>
          <div>
            <input type="checkbox" name="id_store" id="id_store" />
            <label htmlFor='id_store'> 아이디 저장</label>
          </div>
          <div>
            <button>로그인</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
