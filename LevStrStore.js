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

    //console.log(xp);


    return xp;
  }

  getXProdWithScore() {

    var levenshtein = require('fast-levenshtein');
    //var distance = levenshtein.get('back', 'book' , { useCollator: true});

    const fn1 =  z => [z[0], z[1], levenshtein.get(z[0], z[1] , { useCollator: true})   ]

    const xpwd= R.map( fn1, this.getXProd() );
    console.log(xpwd);
    return xpwd;
  }

  render() {
    const xpwd2 = this.getXProdWithScore();


    const ans = this.getXProd().join(",");
    
    return <div> { ans } </div>
    // return <div> {this.getStringArray().join(",")} </div>
    
  }
  

}


export default LevStrStore ;