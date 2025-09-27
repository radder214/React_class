import React from "react";

function Detail2(props) { // 파라미터 이름도 반드시 props로 할 필요는 없다.
    console.group(`Detail props`);
    console.log(props);
    console.groupEnd();
    // Movie 컴포넌트의 Link 태그에 담은 state 값은 props.location.state 경로에 있다.
    return (
        <span>hello</span>
    )
}

class Detail extends React.Component {
    // render -> componentDidMount 순으로 실행된다.
    componentDidMount() {
        const { location, history } = this.props; // 구조 분해 할당
        console.log(this.props);
        console.log(location.state);
        if(!location.state) {
            // redirect
            history.push("/");
        }
    }

    render() {
        console.log(this.props);
        const { location } = this.props; // 구조 분해 할당
        if(location.state) {
            return <div>
                <img src={location.state.poster} alt={location.state.title} />
                <span>{location.state.title}</span>;
            </div>
        } else {
            return null;
        }
    }
}

export default Detail;