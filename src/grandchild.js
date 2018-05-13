import React from "react";
import { Context } from "./index"

function GrandChild() {
    return (
        <Context.Consumer>
            {({count, increment}) => (
                <button onClick={increment}>
                    +
                </button>
            )}
        </Context.Consumer>
    );
}

export default GrandChild;