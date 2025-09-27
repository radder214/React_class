import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      {/* 
        URL의 정확한 일치를 위해 첫 번째 <Route>에 exact={true} 속성 추가 
        해당 속성이 없으면 URL에 /about을 입력하면 Home, About 컴포넌트가 동시에 한 화면에 보인다.
      */}
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} /> {/* path와 component 속성 값이 같을 필요는 없음 */}
      <Route path="/movie/:id" component={Detail} />
    </BrowserRouter>
  )
}

export default App;