import React, { Component } from 'react';
class Change extends Component {
    state = {
        temp: 0,
        foo: {
            bar: 0,
            foobar: 1
        }
    }
    handleChange = () => {
        this.setState({
            temp: this.state.temp + 1
        })
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.temp}
                </div>
                <div>
                    < button onClick={this.handleChange} > ~ </button >
                </div>
            </div>
        )
    }
}

export default Change;
