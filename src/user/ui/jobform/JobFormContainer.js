import { connect } from 'react-redux'
import JobForm from './JobForm'
import { createConsent } from './JobFormActions'

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewConsentCommit: () => {
            dispatch(createConsent())
        }
    }
}

const JobFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(JobForm)

export default JobFormContainer