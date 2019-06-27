// react-bootstrap test.

import React, { Component } from 'react';
import { render } from 'react-dom';

import {Form, FormControl , FormGroup, FormLabel, FormText, ControlLabel, Button} from 'react-bootstrap';
class BTTest extends Component {

  constructor() {
    super();
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
  //           <FormControl.Feedback />
  //           <HelpBlock>Validation is based on string length.</HelpBlock>
  //         </FormGroup>
  //     </Form>
  //    );
  // }




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
    return (
    <div>
       {this.formSkeleton()}
    </div>
	
	
	
    );
    
  }

}

export default BTTest;