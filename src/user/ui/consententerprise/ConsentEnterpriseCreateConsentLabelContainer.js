import { connect } from 'react-redux'
import ConsentEnterpriseCreateConsentLabel from './ConsentEnterpriseCreateConsentLabel'
import { createConsentLabel } from './ConsentEnterpriseActions'

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.user.user.name,
        indexconsents: state.user.indexconsents,
        consent: state.user.consent,
        showConsent: state.user.showConsent

    }
}


const newConsentLabel = (consentType, enterpriseName, consentLabel) => {
    return dispatch => {
        dispatch(createConsentLabel(enterpriseName, consentType, consentLabel))
    }
}

const ConsentEnterpriseCreateConsentLabelContainer = connect(
    mapStateToProps,
    { newConsentLabel }
)(ConsentEnterpriseCreateConsentLabel)

export default ConsentEnterpriseCreateConsentLabelContainer