import React from "react";
import { useState } from "react";
import "../../css/reactjs-the-complete-course-for-beginners/Counter.css"

function Counter() {
    let count = 0;
    const [currentstate, updatedstate] = useState(count);

    const handleClick = () => {
        updatedstate(currentstate+1)
    };

    return (
        <div className="project1-counter-parent">
            <div className="project1-counter">
                <h3>
                    Counter
                </h3>
                <button onClick={handleClick}>{currentstate}</button>
            </div>
        </div>
    )
}
export default Counter;