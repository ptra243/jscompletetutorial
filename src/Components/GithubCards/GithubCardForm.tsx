import * as React from 'react';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

interface GithubCardFormProps {
    addNewProfile : Function
}

interface GithubCardFormState {

}

class GithubCardForm extends React.Component<GithubCardFormProps, GithubCardFormState> {
    constructor(props: GithubCardFormProps) {
        super(props);
        // this.state = { : };
    }

    state = { usernameInput: '' };
    // usernameInput = React.createRef<HTMLInputElement>();
    handleSubmit = async (event: any) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.usernameInput}`);
        this.props.addNewProfile(response.data);
    };
    render() {
        return (<form onSubmit={(event) => this.handleSubmit(event)}>
            <TextField id="standard-basic" label="Github User" variant="outlined"
                // inputProps={{ ref: this.usernameInput }} 
                value={this.state.usernameInput}
                onChange={event => {  this.setState({ usernameInput: event.target.value }) }}
                required />
            <Button variant="contained" type="submit">Search For User</Button>
        </form>);
    }
}

export default GithubCardForm;