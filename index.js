let h = React.createElement;

const posts = [
    { id: 1, title: '1st comment' },
    { id: 2, title: '2nd comment' },
    { id: 3, title: '3rd comment' }
];

let WassupForm = () => {
    return h('form', {}, h('input', {}), h('button', {}, 'post'));
};

let WassupList = (props) => {
    return h('div', {}, h('h3', {}, props.posts.map(post => {
         return h(WassupRow, {post: post, key: post.id} );
    })));
};

let WassupRow = (props) => {
    return h('ul', {}, 
        h('li', {}, props.post.title)
    );
};

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return h('div', {}, 
            h('h1', {}, 'WassUp!'),
            h(WassupForm),
            h(WassupList, { posts: posts }),
            h('h4', {}, 'copyright 2018')
        );
    }
}

ReactDOM.render(h(Homepage), document.querySelector('.root'));
