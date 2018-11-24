import React, { Component } from 'react';
import './App.css';
import Slot from './slot'
const src = require('./src.json')


class App extends Component {
  constructor(){
    super();
    this.state = {
      date : '',
      slots : {}
    }
    this.handleDate = this.handleDate.bind(this);
  }

  handleDate(e) {

    const src1 = src.available_slots.filter(slot => {
      return slot.date.match(e.target.textContent)
    });

    this.setState({
      date : e.target.textContent,
      slots : src1
    });


    // console.log(src1);

  }

  render() {

    console.log(this.state);
    // console.log(src);

    return (
      <div>
      <b><p style = {{ "text-align" : "center", "color" : "blue"}}>{src.title}</p></b>
      <div class = "row">
      <div class = "three columns">
      <div id="scroll-container">
        <div class="wrap-container" id="wrap-scroll">
          <ul id="ul-scroll">
      {src.available_slots.map(value => (
        <li > <span class="item" ref="date" name = "date" onClick={this.handleDate}>{value.date}</span></li>
      )
      )}
      </ul>
    </div>
  	</div>



    </div>
    <div class = "three cloumns">
    <Slot slots={this.state.slots}/>
    </div>
    </div>


      </div>

    );
  }
}

export default App;
