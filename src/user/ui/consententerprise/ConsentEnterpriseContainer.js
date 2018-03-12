import { connect } from 'react-redux'
import ConsentEnterprise from './ConsentEnterprise'
import { getConsentIndex, getConsentByIndex } from './ConsentEnterpriseActions'

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.user.user.name,
        indexconsents: state.user.indexconsents,
        consents: state.user.consents

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

const ConsentEnterpriseContainer = connect(
    mapStateToProps,
    { loadConsentIndexes, loadConsentByIndex }
)(ConsentEnterprise)

export default ConsentEnterpriseContainer