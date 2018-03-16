import { connect } from 'react-redux'
import ConsentCandidat from './ConsentCandidat'
import { getConsentIndex, getConsentByIndex, getCandidatConsent} from './ConsentCandidatActions'

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.user.user.name,
        candidatindexconsents: state.user.candidatindexconsents,
        candidatconsent: state.user.candidatconsent,
        showConsent: state.user.showConsentCandidat
    }
}

const loadConsent = (index) => {
    return dispatch => dispatch(getConsentByIndex(index))
}

const loadIndexConsent = (_candidate, _enterpriseName) => {
    return dispatch => dispatch(getCandidatConsent(_candidate, _enterpriseName))
}

const ConsentCandidatContainer = connect(
    mapStateToProps,
    {loadConsent, loadIndexConsent}
)(ConsentCandidat)

export default ConsentCandidatContainer