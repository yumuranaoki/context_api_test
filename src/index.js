import React, { createContext } from "react";
import ReactDOM from "react-dom";
import Child from "./child";

//set default just in case
export const Context = React.createContext({
    count: 10,
    increment: () =>  {},
})

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.increment = () => {
            this.setState(state => ({
                count: state.count + 1,
            }));
        };

        this.state = {
            count: 10,
            increment: this.increment,
        };
    }
    
    render() {
        return (
            <Context.Provider value={this.state}>
                <div>
                    {this.state.count}
                </div>
                <Child />
            </Context.Provider>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"))