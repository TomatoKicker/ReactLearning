import React from "react";
import Header from "../../components/reactjs-the-complete-course-for-beginners/Header";
import Counter from "../../components/reactjs-the-complete-course-for-beginners/Counter";
import ConditionalRendering from "../../components/reactjs-the-complete-course-for-beginners/ConditionalRendering";

function Project1() {
    return (
        <div className="project1">
            <Header></Header>
            <Counter></Counter>
            <ConditionalRendering></ConditionalRendering>
        </div>
    )
}

export default Project1;