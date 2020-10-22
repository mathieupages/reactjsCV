import React from 'react';
import { connect } from 'react-redux';
import Contact from './Contact.js'

function mapStateToProps(state) {
    return {
        view: state.view
    };
}

class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({ type: 'TEST' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    description = () => {
        this.props.dispatch({ type : 'DESCRIPTION'})
    }

    constructor(props){
        super(props);
        this.state = { isLoggedIn: this.mapStateToProps };
    }

    render() {
        let vue;
        if (this.state === "low")
            vue = <Contact></Contact>
        else {
            vue = <span>Nothing</span>
        }
        return (

            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    {vue}
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.description}>Description</button>                   
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Counter);