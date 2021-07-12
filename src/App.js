import {HashRouter, Route} from "react-router-dom";  // 여러가지중 HashRouter을 사용
import Navigation from "./componants/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


// Router만들고, 그 안에 스크린을 넣어줌
// /about path를 가면 컴포넌트 About를 보여줘
// url를 이용해서 path지정
// exact={true} 오직 url이 /일때만 Home를 헨더링 해줘
// 네비게이터를 작동하면 기본적으로 새로고침 이걸 원하지 않기 때문에 a 대신 link 사용
function App() { 
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-:id" component={Detail} />
    </HashRouter>
    )
  
}


export default App;