import React, { Component } from 'react'
import JobFormContainer from '../../ui/jobform/JobFormContainer'

class Job extends Component {
    render() {
        return(
            <main className="container">
            <div className="pure-g">
            <div className="pure-u-1-1">
            <h1>Job</h1>
            <p>Submitting job</p>
            <JobFormContainer />
            </div>
            </div>
            </main>
        )
    }
}

export default Job