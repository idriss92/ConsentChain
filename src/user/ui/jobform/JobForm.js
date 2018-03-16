import React, { Component } from 'react'

class JobForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            consent: {
                name: this.props.name,
                consentType: '',
                label: '',
                enterpriseName: 'Talentsoft'
            },
            submitted: false
        }
    }

    handleChange(event) {
        const {name, value} = event.target
        const {consent} = this.state
        this.setState({
            consent:{
                ...consent,
                [name]: value
            }
        })
    }

    handleSubmit(event) {
        // console.log(this.props)
        // console.log(this.state)
        const {name, consentType, label, enterpriseName} = this.state.consent
        // const {consentType, label, enterpriseName} = this.props
        event.preventDefault()
        this.setState({submitted: true})
        console.log(event)
        this.props.createNewConsent(name, consentType, label, enterpriseName)
    }

    render() {
        return (
            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                    <br />
                    <label htmlFor="consent1">
                        <input type="checkbox"/> contact me for opportunity: Software developer
                    </label>
                    <button type="submit" className="pure-button pure-button-primary">Apply</button>
                </fieldset>
            </form>
                    )
                }
            }
            
export default JobForm