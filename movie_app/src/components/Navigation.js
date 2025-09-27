import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
    return (
        <div className="nav">
            {/* anchor 태그를 사용하면 React가 죽으면서 화면 자체가 새로고침 된다. */}
            {/*
                <a href="/">Home</a>
                <a href="/about">About</a>
            */}
            {/* <Link> 태그는 Router 안에 있어야한다. */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}