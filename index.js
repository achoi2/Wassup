let h = React.createElement;

let WassupForm = () => {
    return h('form', {}, [
        h('input', {}),
        h('button', {}, 'post')
    ]);
}
    

let WassupList = () => {
    return h('div', {}, 'WassupList');
}

let WassupRow = () => {
    return h('ul', {}, [
        h('li', {}, '1st comment'),
        h('li', {}, '2nd comment'),
        h('li', {}, '3rd comment')
    ]);
}

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return h('div', {}, [h('h1', {}, 'WassUp!'),
            h(WassupForm),
            h(WassupList),
            h(WassupRow)
    ]);
    }
}

ReactDOM.render(h(Homepage), document.querySelector('.root'));
