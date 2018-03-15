import React, { Component } from 'react'
import ConsentCandidatContainer from '../../../ui/consentcandidat/ConsentCandidatContainer'

class Candidat extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
          <h1>My Permissions</h1>
            
            <ConsentCandidatContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default Candidat
