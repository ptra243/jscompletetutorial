import * as React from 'react';
import { useState } from 'react';

interface DisplayProps {
    message:string
}
 
interface DisplayState {
    // text: string
}
 
class Display extends React.Component<DisplayProps, DisplayState> {
    constructor(props: DisplayProps) {
        super(props);
        // this.state = {  text: '' };
    }
    render() { 
        return (  <div>{this.props.message}</div>);
    }
}
 
export default Display;