let generateId = () => {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
};
const posts = [
    { id: 1, title: '1st comment' },
    { id: 2, title: '2nd comment' },
    { id: 3, title: '3rd comment' }
];

class WassupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: ''
        };
    }

    render() {
        return <form
            onSubmit={event => {
                event.preventDefault();
                this.props.addPost(this.state.newPost);
            }}
        >
            <input
                type="text"
                value={this.state.newPost}
                onChange={event => {
                    let value = event.target.value;
                    this.setState({ newPost: value });
                }}
            />
            <input type="submit" value="Post" />
        </form>;
    }
}

let WassupList = props => {
    return (
        <div>
            <h3>
                {props.posts.map(post => {
                    return <WassupRow post={post} key={post.id} />;
                })}
            </h3>
        </div>
    );
};

let WassupRow = props => {
    return (
        <ul>
            <li>{props.post.title}</li>
        </ul>
    );
};

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    render() {
        let addPost = newPost => {
            this.setState({
                posts: this.state.posts.concat([
                    {
                        id: generateId(),
                        title: newPost
                    }
                ])
            });
        };

        return <div>
            <h1>WassUp!</h1>
            <WassupForm addPost={addPost}/>
            <WassupList posts={this.state.posts}/>
            <h4>Copyright 2018</h4>
        </div>
    }
}

ReactDOM.render(<Homepage/>, document.querySelector('.root'));