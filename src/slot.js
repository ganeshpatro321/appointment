import React, { Component } from 'react';
import './App.css';
import Time from './time'
// const src = require('./src.json')


class Slot extends Component{
  constructor(props){
    super(props);

    this.state ={
      status : "null",
      slots : {},
      selected : '',
      hours : []
    }
    this.handleSlot = this.handleSlot.bind(this);


  }

  componentDidMount() {
    console.log("called")
    console.log(this.props)
    this.setState ({

      slots : this.props.slots
    })
  }

  componentDidUpdate(prevProps) {
    console.log("called")
    console.log(prevProps)
    console.log(this.props)
    if(this.props.slots !== prevProps.slots){
    this.setState ({
      status : "notnull",
      slots : this.props.slots
    })
    console.log(this.state)
  }
  }

  handleSlot(e) {
    console.log("clicked")
    console.log(this.state.slots[0].date_slots);
    console.log(e.target.textContent );

    const hour_slots = this.state.slots[0].date_slots.filter( hour => {
      return hour.hour.match(e.target.textContent)
    })

    console.log(hour_slots);

    this.setState({
      selected : e.target.textContent,
      hours : hour_slots[0].hour_slots
    })
  }

	render() {
    console.log(this.state)
    if(this.state.status == "null"){
      return (
        <div><p style = {{ "text-align" : "center", "color" : "blue"}}>Please Click on one of the above mentioned Date you want appointment</p></div>

      );
    }

    else if (this.state.slots[0].date_slots.length == 0){
      return (
        <div><b><p style = {{ "color" : "red", "text-align" : "center"}}>No Slots available for this date</p></b></div>
      )
    }
    else {
      return (
        <div> <p style = {{ "text-align" : "center", "color" : "blue"}}>Available Hours are shown below</p>
        <div class = "row">
        <div id="scroll-container">
          <div class="wrap-container" id="wrap-scroll">
            <ul id="ul-scroll">
        {this.state.slots[0].date_slots.map(value => (
          <li > <span class="item1" ref="date" name = "date" onClick={this.handleSlot}>{value.hour}</span></li>
        )
        )}
        </ul>
        </div>
        </div>
        </div>
        <Time hours = {this.state.hours}/>
        </div>

      )
    }

	}

};

export default Slot;

// this.state.slots[0].date_slots[0].hour
