import { connect } from 'react-redux'
import ConsentEnterprise from './ConsentEnterprise'
import { getConsentIndex, getConsentByIndex, createConsentLabel, resetConsentOnEnterprise } from './ConsentEnterpriseActions'

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.user.user.name,
        indexconsents: state.user.indexconsents,
        consent: state.user.consent,
        showConsent: state.user.showConsent

    }
}

const loadConsentIndexes = () => {
    return dispatch => {
        dispatch(getConsentIndex())
    }
}

const loadConsentByIndex = (index) => {
    return dispatch =>{
        dispatch(getConsentByIndex(index))
    }
}

const resetTheConsent = () => {
    return dispatch => {
        dispatch(resetConsentOnEnterprise())
    }
}


const newConsentLabel = (consentType, enterpriseName, consentLabel) => {
    return dispatch => {
        dispatch(createConsentLabel(enterpriseName, consentType, consentLabel))
    }
}

const ConsentEnterpriseContainer = connect(
    mapStateToProps,
    { loadConsentIndexes, loadConsentByIndex, newConsentLabel, resetTheConsent }
)(ConsentEnterprise)

export default ConsentEnterpriseContainer