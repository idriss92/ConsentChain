import React, { Component } from 'react'
import ConsentEnterpriseContainer from '../../../ui/consententerprise/ConsentEnterpriseContainer'

class Enterprise extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
          <h1>My candidates</h1>
            
            <ConsentEnterpriseContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default Enterprise;
