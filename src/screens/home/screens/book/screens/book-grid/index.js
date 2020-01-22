import { connect } from 'react-redux';
import BookGridScreen from './screen';
import { getBooks } from '../../../../../../redux/actions/book';

function mapStateToProps(state) {
    console.log(state)
    return {
        responseObject: state.book.response,
        errorMessage: state.book.error,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getBooks: payload => dispatch(getBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookGridScreen);