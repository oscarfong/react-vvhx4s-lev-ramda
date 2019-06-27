import React, { Component } from 'react';

class LevStrStore extends Component{
  constructor() {
    super();
  }

  getStringArray() {
    return ["apple", "orange", "banana" ];
  }

  render() {
    return <div> {this.getStringArray().join(",")} </div>
  }
  

}


export default LevStrStore ;