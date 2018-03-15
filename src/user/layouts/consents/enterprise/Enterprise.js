import React, { Component } from 'react'
import ConsentEnterpriseContainer from '../../../ui/consententerprise/ConsentEnterpriseContainer'
import ConsentEnterpriseCreateConsentLabelContainer from '../../../ui/consententerprise/ConsentEnterpriseCreateConsentLabelContainer'

class Enterprise extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
          <h1>Consents</h1>
            <p>Edit my consents here.</p>
            <ConsentEnterpriseContainer />
            <ConsentEnterpriseCreateConsentLabelContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default Enterprise;
