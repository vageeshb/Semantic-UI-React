import React, {Component} from 'react';
import {Checkbox} from 'stardust';

export default class extends Component {
  render() {
    return (
      <div>
        <Checkbox className='radio' label='Radio choice' />
      </div>
    );
  }
}