import { connect } from 'react-redux'
import JobForm from './JobForm'
import { createConsent } from './JobFormActions'

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.user.user.name
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onNewConsentCommit: () => {
//             dispatch(createConsent())
//         }
//     }
// }

const createNewConsent = (candidate, consentType, label, enterpriseName) => {
    return dispatch => {
        dispatch(createConsent(candidate, consentType, label, enterpriseName))
    }
}

const JobFormContainer = connect(
    mapStateToProps,
    {createNewConsent}
)(JobForm)

export default JobFormContainer