import React, { Component } from 'react';

import * as R from 'ramda';

import {Button,Table}  from 'react-bootstrap';

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

  getBSRows() {
    const fnRow = rr =>   <tr>
                  <td>*</td>
                  <td>{rr[0]}</td>
                  <td>{rr[1]}</td>
                  <td>{rr[2]}</td>
                </tr> ;
    const btRows = R.map(fnRow, this.getXProdWithScore());

    return btRows;
  }

  getBSTable() {
    return 	<div>
              <Button variant="primary">Primary</Button>
              <Table striped bordered hover>
                <thead>
                <tr>
                  <th>#</th>
                  <th>str1</th>
                  <th>str2</th>
                  <th>score</th>
                </tr>
                </thead>
                <tbody>
                
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                {this.getBSRows()}
                
                </tbody>
              </Table>
            </div>
    ;
  }

  render() {
    const xpwd2 = this.getXProdWithScore();


    const ans = this.getXProd().join(",");
    
    return <div>{this.getBSTable()} { ans } </div>
    // return <div> {this.getStringArray().join(",")} </div>
    
  }
  

}


export default LevStrStore ;