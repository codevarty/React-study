import {
  //HashRouter는 브라우저 주소뒤에 /#/가 붙는다.
  //BrowserRouter는 브라우저 주소뒤에 /#/가 붙지 않는다.
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
/**Movie App */
// map 함수는 새로운 배열을 반환한다.
function App() {
  return <Router>
    <Switch>
      <Route path="/movie">
        <Detail/>
      </Route>
      <Route /*Home Route*/ path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;
