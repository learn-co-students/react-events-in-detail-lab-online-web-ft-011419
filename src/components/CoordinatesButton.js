import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  mouseCoordinates = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return (
      <button onClick={this.mouseCoordinates}>Mouse Coordinates</button>
    )
  }
}

