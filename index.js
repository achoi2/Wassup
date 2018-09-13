const h = React.createElement;

let generateId = () => {
   return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
}
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
        }
    }
    
    render() {
        return h('form', {
        onSubmit: (event) => {
            event.preventDefault()
            this.props.addPost(this.state.newPost)
        }
    }, 
        h('input', {type: 'text',
        value: this.state.newPost,
        onChange: (event) => {
            let value = event.target.value;
            console.log(value)
            this.setState({ newPost: value })
        }}), 
        h('button', {}, 'post')
    )
    }
}

let WassupList = (props) => {
    return h('div', {}, 
        h('h3', {}, props.posts.map(post => {
        return h(WassupRow, {post: post, key: post.id} );
    }))
    );
};

let WassupRow = (props) => {
    return h('ul', {}, 
        h('li', {}, props.post.title)
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
        let addPost = (newPost) => {
            this.setState({
                posts: this.state.posts.concat([
                    {
                        id: generateId(),
                        title: newPost
                    }
                ])
            })
        }
        
        return h('div', {}, 
            h('h1', {}, 'WassUp!'),
            h(WassupForm, {addPost: addPost}),
            h(WassupList, { posts: this.state.posts }),
            h('h4', {}, 'copyright 2018')
        );
    }
}

ReactDOM.render(h(Homepage), document.querySelector('.root'));