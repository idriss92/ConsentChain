import React, { Component } from 'react'

class JobForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(event)
        this.props.onNewConsentCommit()
    }

    render() {
        return (
            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>

                    <br />

                    <label htmlFor="consent1">
                        <input type="checkbox"/> Consent 1
                    </label>
                    <label htmlFor="consent2">
                        <input type="checkbox"/> Consent 2
                    </label>

                    <button type="submit" className="pure-button pure-button-primary">Apply</button>
                </fieldset>
            </form>
                    )
                }
            }
            
export default JobForm