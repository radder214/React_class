import { Component } from "react";

// extends React.Component => 필수 구문
// React.Component = Component ==> import { Component } from "react" 했을 때
class App extends Component {
  constructor(props) {
    super(props);
    console.log(`constructor`);
  }
  /**
   * state
   * - Object 형태
   * - Component의 데이터를 넣는 공간(바꾸고 싶은 데이터)
   * - 절대 state를 직접 변경하면 안 된다.
   * - state를 직접 변경하면 React는 render function을 refresh 하지 않는다.
   */
  state = {
    count: 0
  }

  add = () => {
    // state는 object 이기에 아래와 같이 state를 변경한다.
    this.setState(current => {
        // state 변경 전에 다른 작업을 수행하고 싶으면 명시적으로 return 문을 작성하면 된다.
        // 그러면 setState 본문 안에서 추가 로직 실행 가능
        console.log(`add`);
        return {
          count : current.count + 1
        }
      });
  }

  minus = () => {
    this.setState(current => ({
      count : current.count - 1
    }))
  }

  // 컴포넌트가 '맨 처음' 화면에 render 됐을 때 실행되는 함수
  // 컴포넌트가 처음 만들어져 DOM에 추가될 때
  componentDidMount() {
    console.log(`Component rendered - componentDidMount function`);
  }

  // state 변경이 완료되면 호출되는 함수(props/state가 바뀌어 다시 렌더링될 때)
  // render function => componentDidUpdate function 순으로 호출
  componentDidUpdate() {
    console.log(`State updated - componentDidUpdate function`);
  }

  // 컴포넌트가 destroy 되기 '직전'에 호출
  // React가 해당 컴포넌트를 DOM에서 제거하기 직전에 호출
  componentWillUnmount() {
    console.log(`Component destroy - componentWillUnmount function`);
  }

  /**
   * React.Component에 있는 method, 렌더링 = JSX를 반환한다.
   * Recat는 자동적으로 모든 class Component의 render method를 실행한다.
   * 반대로 말하면 class Component에는 반드시 render method를 작성해야 한다.(없으면 오류남)
   */
  render() {
    console.log(`I'm rendering - render function`);
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