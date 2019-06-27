import React, { Component } from 'react';

import * as R from 'ramda';

import {Button,Table,}  from 'react-bootstrap';
//  InputGroup , FormControl

class LevStrStore extends Component{
  constructor() {
    super();
  }

  getStringArray() {
    return ["SMT", "EBT", "NBT", "GVT",  ];
  }

  //  LevStrStore/getXProd
  getXProd(fnReject) {

    // TODO : fnFilter
    
    const xp= R.xprod( this.getStringArray(),   this.getStringArray());
    let xp2= null;

    console.log ( 1000);
    console.log ( fnReject != null);

    if ( fnReject != null) {
      xp2 = R.reject(fnReject, xp)
    } else {
      xp2 = xp;
    }
    

    //console.log(xp);


    return xp2;
  }

  getXProdWithScore() {

    var levenshtein = require('fast-levenshtein');
    //var distance = levenshtein.get('back', 'book' , { useCollator: true});

    const fn1 =  z => [z[0], z[1], levenshtein.get(z[0], z[1] , { useCollator: true})   ]


    // reject duplicated cross product elements with chkDuplicateEQ()
    const chkDuplicateEQ = elem => elem[0]==elem[1]  ;
    const xpwd= R.map( fn1, this.getXProd( chkDuplicateEQ ) );
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
              <div class="BSTable">
              <Table striped bordered hover  size="sm">
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
            </div>
    ;
  }

  render() {
    const xpwd2 = this.getXProdWithScore();

    return <div>
    {this.getBSTable()}  </div>
    // return <div> {this.getStringArray().join(",")} </div>
    
  }
  

}


export default LevStrStore ;