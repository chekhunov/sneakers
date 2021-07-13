import React from 'react';

function Count() {
    const [count, setCount] = React.useState(0)

    const plus = () => {
        setCount(count + 1);
    };
    const minus = () => {
        setCount(count - 1);
    };

    return (
        <div className={""} >
            <center >
                <h1 >{count}</h1 >
                <button onClick={() =>
                    plus()
                } >+
                </button >
                <button onClick={minus
                } >-
                </button >
            </center >
        </div >
    );
}


export default Count;