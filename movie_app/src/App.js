import { Component } from "react";

// extends React.Component => 필수 구문
// React.Component = Component ==> import { Component } from "react" 했을 때
class App extends Component {
  /**
   * state
   * - Object 형태
   * - Component의 데이터를 넣는 공간(바꾸고 싶은 데이터)
   */
  state = {
    count: 10
  }

  add = () => {
    console.log('add');
  }

  minus = () => {
    console.log('minus');
  }

  /**
   * React.Component에 있는 method, 렌더링 = JSX를 반환한다.
   * Recat는 자동적으로 모든 class Component의 render method를 실행한다.
   * 반대로 말하면 class Component에는 반드시 render method를 작성해야 한다.(없으면 오류남)
   */
  render() {
    return (
      <div>
        {/* class Component이기 때문에 반드시 this를 붙여줘야 한다. */}
        <h1>The Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  };
}

export default App;