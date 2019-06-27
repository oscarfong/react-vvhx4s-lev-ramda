import React, { Component } from 'react';

class LevTest extends Component {

  constructor() {
    super();

    //this.getData = this.getData.bind(this);  
    // https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs


  };

  render() {

    var levenshtein = require('fast-levenshtein');
    var distance = levenshtein.get('back', 'book' , { useCollator: true});
    //     var distance = levenshtein.get('back', 'book' );   

    //return distance;

    

      return (
      <div>{distance} </div> );
  }

}

export default LevTest;
