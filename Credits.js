/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CreditList extends Component {
  render() {
    return(
      <div>
        Credits : {this.props.creditList}
      </div>
    )
  }
}

const Credits = (props) => {
  return (
    <div>
      <h1>Credits</h1>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;