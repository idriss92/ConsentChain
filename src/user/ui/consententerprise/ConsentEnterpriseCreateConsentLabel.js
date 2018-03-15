import React, { Component } from 'react'

class ConsentEnterpriseCreateConsentLabel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            consentType: '',
            consentLabel: '',
            enterpriseName: 'Talentsoft'
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {

    }

    handleOnChange(event) {
        console.log(this.props)
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { newConsentLabel } = this.props;
        newConsentLabel(this.state.enterpriseName, this.state.consentType, this.state.consentLabel)
    }

    renderFormCreation() {
        return (
            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit}>
                <fieldset>
                    <br />
                    <label htmlFor="consentType">Consent type</label>
                    <input type="text" value={this.state.consentType} name="consentType" onChange={this.handleOnChange} />
                    <label htmlFor="consentLabel"> Consent label</label>
                    <input type="text" value={this.state.consentLabel} name="consentLabel" onChange={this.handleOnChange}/>            
                    <button type="submit" className="pure-button pure-button-primary">Apply</button>
                </fieldset>
            </form>

        )
    }

    render() {
        return <div>{this.renderFormCreation()}</div>
    }
}

export default ConsentEnterpriseCreateConsentLabel