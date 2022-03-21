import * as React from 'react';
import { useState } from 'react';
import GithubProfile from './GithubProfile';
import GithubcCardList from './GithubCardList';
import GithubCardForm from './GithubCardForm';

interface GithubCardsAppProps {

}

interface GithubCardsAppState {
    profiles: Array<GithubProfile>
}
const testData: Array<GithubProfile> = [
    new GithubProfile({ name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" }),
    new GithubProfile({ name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" }),
    new GithubProfile({ name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" }),
];

class GithubCardsApp extends React.Component<GithubCardsAppProps, GithubCardsAppState> {
    constructor(props: GithubCardsAppProps) {
        super(props);
        this.state = { profiles: testData };
    }
    addNewProfile = (profileData: any) => {
        console.log(profileData);
        const newprofile: GithubProfile = new GithubProfile({name: profileData.name,avatar_url:profileData.avatar_url, company: profileData.company});
        this.setState(
            prevstate => ({ profiles: [...prevstate.profiles, newprofile] }));
    }
    render() {

        return (
            <div>
                <GithubCardForm addNewProfile={this.addNewProfile} />
                <GithubcCardList profiles={this.state.profiles} />
            </div>
        );
    }
}

export default GithubCardsApp;