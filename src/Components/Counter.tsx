import * as React from 'react';
import { Component } from 'react';
import { useState } from 'react';

interface CounterProps {
    counter: number,
    increment:number,
    handleclick: Function
}
function Counter(props: CounterProps) {

    const buttonClick = ()=>{props.handleclick(props.increment)};
    return (<button onClick={buttonClick}>
        {props.increment}
    </button>);
}
export default Counter;

