import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';

import TravelTypeManager from './components/TravelTypeManager';
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';
import DestinationManager from './components/DestinationManager'
import OriginManager from './components/OriginManager'
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class App extends Component {
  constructor(){
    super()

    this.state = {
      response: [],
      travelType: '',
      checked: false,
      selectedDestination: '',
      selectedOrigin: '',
      initialDepartureDate: new Date(),
      selectedDepartureDate: new Date(),
      initialReturnDate: new Date(),
      selectedReturnDate: new Date(),
      setSelectedDate: '',
      adultQuantity: 0,
      childQuantity: 0,
      infantQuantity: 0,
    };
  }

  handleTravelTypeChange = (e) => {
    this.setState({
        travelType: e.target.value
    });
  }

  handleOriginChange = (e) => {
    this.setState({
      selectedOrigin: e.target.value
    })
  }

  handleDestinationChange = (e) => {
    this.setState({
      selectedDestination: e.target.value
    })
  }

  handleDepartureDateChange = selectedDepartureDate => {
    this.setState({
      initialDepartureDate: selectedDepartureDate
    });
  };

  handleReturnDateChange = selectedReturnDate => {
    this.setState({
      initialReturnDate: selectedReturnDate
    });
  };

  IncrementItem = (e) => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
    e.preventDefault();
  }

  DecreaseItem = (e) => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] - 1 }));
    e.preventDefault();
  }

  handleDepartureDateChange = selectedDepartureDate => {
    this.setState({
      initialDepartureDate: selectedDepartureDate
    });
  };

  handleReturnDateChange = selectedReturnDate => {
    this.setState({
      initialReturnDate: selectedReturnDate
    });
  };

  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(res => {
  //       const response = res.data
  //       this.setState({response})
  //     })
  // }

  render() {
  // let response = this.state.response;
  // let responseItems = response.map(res => <MenuItem value={res.name} key={res.name}>{res.name}</MenuItem>);
  
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <div className="header">
            <p>Ezy Test Frontend</p>  
          </div>
          <form>
            <div>
              <p>Travel type</p>
            </div> 

            <div className="form-container">
              <TravelTypeManager handleTravelTypeChange={this.handleTravelTypeChange} travelType={this.state.travelType}/>
            </div>

            <div>
              <p>Destination</p>
            </div> 

            <div className="dest-wrapper">
              <div className="dest-cont">
                <div>
                  <OriginManager />
                </div>
              </div>

              <div className="dest-cont">
                <div>
                  <DestinationManager />
                </div>
              </div>
            </div>

            <div>
              <p>Travel Dates</p>
            </div> 
              <div className="form-container">

              <label className="dm-label">Departure Date:</label>
              <div className="dm-wrapper">
                <div className="date-container">
                <FormControl>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    id="dep-date-picket"
                    label=""
                    disabled={this.state.travelType === "Return"}
                    value={this.state.initialDepartureDate}
                    onChange={this.handleDepartureDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                  </MuiPickersUtilsProvider>
                </FormControl>
                  </div>
              </div>


              <label className="dm-label">Return Date:</label>
              <div className="dm-wrapper">
                  <FormControl>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    id="ret-date-picket"
                    label=""
                    disabled={this.state.travelType === "One-way"}
                    value={this.state.initialReturnDate}
                    onChange={this.handleReturnDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                  </MuiPickersUtilsProvider>
                </FormControl> 
                
              </div>
            </div>

            <div>
              <p>Tickets</p>
            </div>

            <div className="ticket-wrapper">
              <div className="ticket-cont">
                <div className="ticket-label"> Adults: </div>
                <div className="ticket-num-cont">
                    <div className="ticket-box">
                      <button className="quantityBtn" onClick={this.DecreaseItem} name='adultQuantity' disabled={this.state.adultQuantity === 0}>-</button>
                    </div>
                    <div className="ticket-box">
                      {this.state.adultQuantity}
                    </div>
                    <div className="ticket-box">
                      <button className="quantityBtn" onClick={this.IncrementItem} name='adultQuantity'>+</button>
                    </div>
                </div>
              </div>

              <div className="ticket-cont">
                <div className="ticket-label"> Children: </div>
                  <div className="ticket-num-cont">
                    <div className="ticket-box">
                      <button className="quantityBtn" onClick={this.DecreaseItem} name='childQuantity' disabled={this.state.childQuantity === 0}>-</button>
                    </div>
                    <div className="ticket-box">
                      {this.state.childQuantity}
                    </div>
                    <div className="ticket-box">
                      <button className="quantityBtn" onClick={this.IncrementItem} name='childQuantity'>+</button> 
                    </div>
                  </div>
              </div>

              <div className="ticket-cont">
                <div className="ticket-label"> Infants: </div>
                <div className="ticket-num-cont">
                    <div className="ticket-box">
                      <button className="quantityBtn" onClick={this.DecreaseItem} name='infantQuantity' disabled={this.state.infantQuantity === 0}>-</button>
                    </div>
                    <div className="ticket-box">
                      {this.state.infantQuantity}
                    </div>
                    <div className="ticket-box">
                      <button className="quantityBtn" onClick={this.IncrementItem} name='infantQuantity'>+</button> 
                    </div>
                </div>
              </div>
            </div>
            <div className="form-footer-wrap">
              <div className="form-btn-cont">
                <Button>Searcher</Button> 
              </div>
            </div>
          </form>
        </div>
      </div>

    )
  }
}

export default App;


