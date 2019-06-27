import React, { Component } from 'react';

import * as R from 'ramda';

class LevStrStore extends Component{
  constructor() {
    super();
  }

  getStringArray() {
    return ["apple", "orange", "banana" ];
  }

  //  LevStrStore/getXProd
  getXProd() {
    const xp= R.xprod( this.getStringArray(), this.getStringArray());

    console.log(xp);


    return xp;
  }

  render() {
    const ans = this.getXProd().join(",");
    
    return <div> { ans } </div>
    // return <div> {this.getStringArray().join(",")} </div>
    
  }
  

}


export default LevStrStore ;