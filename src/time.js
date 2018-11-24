import React, { Component } from 'react';
import './App.css';
const src = require('./src.json')


class Time extends Component{
  constructor(props){
    super(props);

    this.state = {
      status : "null",
      hours : []
    }
    this.handleTime = this.handleTime.bind(this);
  }

componentDidMount() {
  console.log("called")
  console.log(this.props)
  this.setState ({
    time : this.props.hours
  })
}


componentDidUpdate(prevProps) {
  console.log("update called")
  console.log(prevProps)
  console.log(this.props)
  if(this.props.hours !== prevProps.hours){
    console.log("changed");
  this.setState ({
    status : "notnull",
    hours : this.props.hours
  })
  console.log(this.state)
}
}

handleTime(e) {
  console.log("Time Clicked")
  console.log(e.target.textContent);
  console.log(this.state.hours)
  // const slotID = this.state.hours.filter(id => {
  //   return Object.keys(id).match(e.target.textContent)
  // })
  // console.log(slotID)
  for ( var  i = 0; i < this.state.hours.length; i++ ){
    console.log(Object.keys(this.state.hours[i])[0]);
    console.log(e.target.textContent);
    if ( Object.keys(this.state.hours[i])[0] === e.target.textContent){
      const slotID = Object.values(this.state.hours[i])
      console.log(slotID[0])
      alert("Your Slot ID is : " + slotID[0])
    }
  }




}

render() {
  console.log(this.state)
  const hour_slots = []
  for(var i = 0; i < this.state.hours.length; i++ ) {
    // console.log(this.state.hours[i])
    hour_slots.push(Object.keys(this.state.hours[i]))
  }
  console.log(hour_slots)
  if(this.state.status == "null"){
  return(
    <div><p style = {{ "text-align" : "center", "color" : "blue"}}>Please Select Which hour</p></div>
  )
}
else {
  return(
    <div><p style = {{ "text-align" : "center", "color" : "blue"}}>Available time Slots </p>
    <div class = "row">
    <div id="scroll-container">
      <div class="wrap-container" id="wrap-scroll">
        <ul id="ul-scroll">
    {hour_slots.map(value => (
      <li > <span class="item1" ref="date" name = "date" onClick={this.handleTime}>{value}</span></li>
    )
    )}
    </ul>
    </div>
    </div>
    </div>
    <p style = {{ "text-align" : "center", "color" : "blue"}}>Please Click On Your Desired Time To Get Your<b><p style = {{"color" : "red"}}> SlotID </p></b> </p>
    </div>
  )
}

}

}

export default Time;
