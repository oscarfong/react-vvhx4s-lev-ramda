// react-bootstrap test.

import React, { Component } from 'react';
import { render } from 'react-dom';

import {Form, FormControl , FormGroup, FormLabel, FormText, ControlLabel, Button} from 'react-bootstrap';
class BTTest extends Component {

  constructor() {
    super();
  }


  render() {
    return (
    <div>
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



    </div>
	
	
	
    );
    
  }

}

export default BTTest;