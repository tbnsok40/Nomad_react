import React, { Component } from 'react';

class Counter extends Component {
    state = {
        temp: 0,
        number: 0
    }

    // 비구조화 할당 문법
    handleIncrease = () => {
        const { temp, number } = this.state;
        this.setState({
            temp: number,
            number: number + 1
        })
    }

    // handleIncrease = () => {
    //     this.setState({
    //         temp: this.state.number,
    //         number: this.state.number + 1
    //     });
    // }

    handleDecrease = () => {
        this.setState({
            temp: this.state.number,
            number: this.state.number - 1
        });
    }

    handleSquare = () => {
        this.setState({
            temp: this.state.number,
            number: this.state.number ** 2
        })
    }
    handleInit = () => {
        this.setState({
            number: 0
        })
    }
    handleMinus = () => {
        this.setState({
            temp: this.state.number,
            number: this.state.number * -1
        })
    }
    handlehunderd = () => {
        const { number } = this.state;
        this.setState({
            number: 100
        })
    }
    handleRollback = () => {
        const { temp } = this.state;
        this.setState({
            number: temp
        })
    }
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    componentWillMount() {
        console.log('It"s mounting')
    }
    componentDidMount() {
        console.log('component rendered');
    }
    componentDidUpdate() {
        console.log('component updated');
    }
    // componentWillUnmount() {
    //     console.log('bye')
    // }
    render() {
        console.log('It"s rendering')
        return (
            <div>
                <h1>
                    카운터
          </h1>
                <div>
                    값: {this.state.number}
                </div>

                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                <div>

                    {/* onClick 아벤트에 전달해야하는 값은 메소드(funtion())가 아닌 함수(function)다 */}
                    <button className='function' onClick={this.handleSquare}>Square</button>
                    <button className='function' onClick={this.handleInit}>Init</button>
                    <button className='function' onClick={this.handleMinus}>Minus</button>
                    <button className='function' onClick={this.handleRollback}>Rollback</button>
                    <button className='function' onClick={this.handlehunderd}>100</button>
                </div>
            </div>
        )
    }
}

export default Counter;
