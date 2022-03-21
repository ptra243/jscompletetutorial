import React from "react";
import './GithubCards.css';
import GithubCard from "./GithubCard";
import GithubProfile from "./GithubProfile";


interface GithubcCardListProps {
    profiles: Array<GithubProfile>
}

interface GithubcCardsState {

}

class GithubcCardList extends React.Component<GithubcCardListProps, GithubcCardsState> {
    constructor(props: GithubcCardListProps) {
        super(props);
        // this.state = { :  };
    }
    render() {
        return (<div>
            <div className="header">The Github Cards App</div>
            {this.props.profiles.map((data) => (
                <GithubCard key={data.name} {...data} />
            ))}
        </div>);
    }
}

export default GithubcCardList;