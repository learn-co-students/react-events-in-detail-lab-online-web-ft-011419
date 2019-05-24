import React, {Component} from 'react';

class CoordinatesButton extends Component {

    indexReceivedCoordinates = (e) => {
        e.persist()
        const coordinates = [e.clientX, e.clientY]
        return this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <button onClick={(e) => this.indexReceivedCoordinates(e)}>Click me for X and Y coordinates</button>
        )
    }
}

export default CoordinatesButton