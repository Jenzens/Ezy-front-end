import React, { Component } from 'react'
import './style.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export class TravelTypeManager extends Component {
    render() {
        return (
            <RadioGroup aria-label="position">
                <div className="radio-wrapper">
                    <div className="radio-box-1">
                        <FormControlLabel 
                            value="Return" 
                            control={<Radio />} 
                            label="Return"
                            labelPlacement="bottom"
                            onChange={this.props.handleTravelTypeChange}
                            checked={this.props.travelType === "Return"}
                            />
                    </div>
                    <div className="spacer"></div>
                    <div className="radio-box-2">
                        <FormControlLabel 
                            value="One-way" 
                            control={<Radio />} 
                            label="One-way"
                            labelPlacement="bottom"
                            onChange={this.props.handleTravelTypeChange}
                            checked={this.props.travelType === "One-way"} 
                            />
                    </div>
                </div>
            </RadioGroup>
        )
    }
}
export default TravelTypeManager
