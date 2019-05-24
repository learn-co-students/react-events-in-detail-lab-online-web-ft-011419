import React, {Component} from 'react';

class DelayedButton extends Component {

    indexDelayButton = (e) => {
        e.persist()
        setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
    }

    render() {
        return (
            <button onClick={(e) => this.indexDelayButton(e)}>Click me for a delayed response</button>
        )
    }
}

export default DelayedButton
