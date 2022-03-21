class GithubProfile {
    /**
     *
     */
    public constructor(init?:Partial<GithubProfile>) {
        Object.assign(this, init);
    }

    public avatar_url: string = '';
    public name: string = '';
    public company: string = '';
}

export default GithubProfile;