import { connect } from 'react-redux';
import ViewBookScreen from './screen';
import { getBook } from '../../../../../../redux/actions/book';

function mapStateToProps(state) {
    console.log(state)
    return {
        responseObject: state.book.response,
        errorMessage: state.book.error,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getBook: payload => dispatch(getBook(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBookScreen);