import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import * as R from 'ramda';
import {Maybe} from 'ramda-fantasy';


import LevTest from './LevTest'
import LevStrStore from './LevStrStore'

import BTTest from './BTTest'

// Reference:
// https://www.npmjs.com/package/fast-levenshtein

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  crossProduct() {

    const mm1 = ['dsds', 'dsds'];
    const mm2 = ['xx', 'yy'];

    return R.xprod(mm1, mm2);

  }

  oldTest1() {
    const initial2 = ['dsds', 'dsds'];

    const rt = Maybe(initial2).getOrElse(['жопа']);
    const res1 = R.map(R.toUpper)(rt);
    console.log(res1);
  }


  ramdaTestFunc() {
    this.oldTest1();

    const cpr= this.crossProduct();
    console.log(cpr);

    return <div>ramdaTestFunc: xprod (cross product) : {cpr}</div>
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          <BTTest/>
        </p>
        { this.ramdaTestFunc()}
        <p/>
        LevTest: <LevTest/>
        <p/>
        LevStrStore: <LevStrStore/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
