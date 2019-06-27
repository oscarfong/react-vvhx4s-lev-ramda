// react-bootstrap test.

import React, { Component } from 'react';
import { render } from 'react-dom';

import {Form, FormControl , FormGroup, FormLabel, FormText, ControlLabel, Button} from 'react-bootstrap';

import Autocomplete, {ReactAutocomplete} from 'react-autocomplete';

class BTTest extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }
  }


  // formSkeletonNotTested() {
  //   return (
  //     <Form>
  //       <FormGroup
  //           controlId="formBasicText"
  //           validationState={this.getValidationState()}
  //         >
  //           <ControlLabel>Working example with validation</ControlLabel>
  //           <FormControl
  //             type="text"
  //             value={this.state.value}
  //             placeholder="Enter text"
  //             onChange={this.handleChange}
  //           />
  //         </FormGroup>
  //     </Form>
  //    );
  // }


  getValidationState(){
  }

  handleChange () {
  }

  formSkeleton() {
	return (
      <Form>
        <FormGroup
            controlId="formBasicText"
            
          >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              
              placeholder="Enter text"
              
            />
            <FormControl.Feedback />
          </FormGroup>
      </Form>
	 );
  }


  render() {

    //const value = 'apple';
    return (
    <div>
       {this.formSkeleton()}

    <Autocomplete
      getItemValue={(item) => item.label}
      items={[
        { label: 'apple' },
        { label: 'banana' },
        { label: 'pear' }
      ]}
      renderItem={(item, isHighlighted) =>
        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
          {item.label}
        </div>
      }
      value={this.state.value}
      onChange={e => this.setState({ value: e.target.value })}
      onSelect={value => this.setState({ value })}
    />

    </div>
	
	
	
    );
    
  }

}

export default BTTest;