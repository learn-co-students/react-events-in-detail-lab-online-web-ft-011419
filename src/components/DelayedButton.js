// Code DelayedButton Component Here
import React from 'react';
export default class DelayedButton extends React.component {
  delayed = (event) => {
  setTimeout(this.props.onDelayedClick, this.props.delay)
  }
  render() {

return (
  <button onClick={this.delayed} > </button> 
)

   
  }
}