import React, { Component } from "react";
import propTypes from "prop-types"
import './counter.css'

export default class MainCounter extends Component
{
    constructor()
    {
        super(); //To use constructor we have to always call super()
        this.state = {
            counter : 0
        }
        this.increament = this.increament.bind(this); // binding func with class
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return(
            <div className = "MainCounter">
                <Counter by={1} increamentMethod = {this.increament} decrementMethod = {this.decrement}></Counter>
                <Counter by={5} increamentMethod = {this.increament} decrementMethod = {this.decrement}></Counter>
                <Counter by={10} increamentMethod = {this.increament} decrementMethod = {this.decrement}></Counter>
                <span className="count">{this.state.counter}</span>
                <Reset resetMethod = {this.reset}></Reset>
            </div>
        );
    }

    increament(by)
    {
        this.setState(
            (prevState) => {
            return {counter : prevState.counter + by}
        });
    }

    decrement(by)
    {
        this.setState(
            (prevState) => {
            return {counter : prevState.counter - by}
        });
    }

    reset()
    {
        this.setState({
            counter : 0
        })
    }


}

class Reset extends Component
{
    constructor()
    {
        super(); //To use constructor we have to always call super()
        this.state = {
            counter : 0
        }

    }

    render() {
        return (
            <div className="Reset">
                <button className = "reset" onClick={() => this.props.resetMethod()}>RESET</button>
            </div>
        )
    }

}

class Counter extends Component
{

    constructor()
    {
        super(); //To use constructor we have to always call super()
        this.state = {
            counter : 0
        }

    }


    render() {
        return(
            <div className="Counter">
                <button onClick={() => this.props.increamentMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }

    
}

Counter.defaultProps = { by : 1 }
Counter.propTypes = { by : propTypes.number}
