import React, { Component } from 'react'
import loading from './../Spinner-1s-200px.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img style={{background:'black'}} src={loading} alt="" srcset="" />
      </div>
    )
  }
}

export default Spinner