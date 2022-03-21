import * as React from 'react';
import { useState } from 'react';
import GithubProfile from './GithubProfile';


interface GithubCardState {

}

class GithubCard extends React.Component<GithubProfile, GithubCardState> {
    constructor(props: GithubProfile) {
        super(props);
        // this.state = { :  };
    }
    render() {
        return (<div className="github-profile">
            <img src={this.props.avatar_url} />
            <div className="info">
                <div className="name">{this.props.name}</div>
                <div className="company">{this.props.company}</div>
            </div>
        </div>);
    }
}

export default GithubCard;