import { connect } from 'react-redux'
import ConsentEnterprise from './ConsentEnterprise'
import {getCandidatConsent} from './ConsentEnterpriseActions'

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.user.user.name
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        loadConsent: (_candidate) => {
            dispatch(getCandidatConsent(_candidate))
        }
    }
}

const ConsentEnterpriseContainer = connect(
    mapStateToProps,
    mapDispachToProps
)(ConsentEnterprise)

export default ConsentEnterpriseContainer