import React, { Component } from 'react'
import ConsentEnterpriseCreateConsentLabelContainer from '../../../ui/consententerprise/ConsentEnterpriseCreateConsentLabelContainer'

class ConsentLabel extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
          <h1>Consents Label</h1>
            <ConsentEnterpriseCreateConsentLabelContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default ConsentLabel;
