import { connect } from 'react-redux';
import AddBookScreen from './screen';
import { addBook } from '../../../../../../redux/actions/book';

function mapStateToProps(state) {
    console.log(state)
    return {
        responseObject: state.book.response,
        errorMessage: state.book.error,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addBook: payload => dispatch(addBook(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookScreen);