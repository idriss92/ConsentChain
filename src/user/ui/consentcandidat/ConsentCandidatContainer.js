import { connect } from 'react-redux'
import ConsentCandidat from './ConsentCandidat'
import {  getConsentByIndex, getCandidatConsent, revokeConsent} from './ConsentCandidatActions'

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.user.user.name,
        candidatindexconsents: state.user.candidatindexconsents,
        candidatconsent: state.user.candidatconsent,
        showConsentCandidat: state.user.showConsentCandidat
    }
}

const loadConsent = (index) => {
    return dispatch => dispatch(getConsentByIndex(index))
}

const loadIndexConsent = (_candidate, _enterpriseName) => {
    return dispatch => dispatch(getCandidatConsent(_candidate, _enterpriseName))
}

const revoke = (isActive) => {
    return dispatch => dispatch(revokeConsent(isActive))
}

const ConsentCandidatContainer = connect(
    mapStateToProps,
    {loadConsent, loadIndexConsent, revoke}
)(ConsentCandidat)

export default ConsentCandidatContainer