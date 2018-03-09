import { connect } from 'react-redux'
import ConsentCandidat from './ConsentCandidat'
import {getCandidatConsent} from './ConsentCandidatActions'

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.user.data.name
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        loadConsent: (_candidate) => {
            dispatch(getCandidatConsent(_candidate))
        }
    }
}

const ConsentCandidatContainer = connect(
    mapStateToProps,
    mapDispachToProps
)(ConsentCandidat)

export default ConsentCandidatContainer