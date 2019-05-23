// Code DelayedButton Component Here
import React from 'react';
export default class DelayedButton extends React.Component {
  delayed = (event) => {
/// this will print out the event but not passed console.log(event)
   //event.persist()
    setTimeout(() => {
      console.log(event), this.props.delay
  })
  }


 
    
    




  render() {

return (
  <button onClick={this.delayed} > </button> 
)

   
  }
}