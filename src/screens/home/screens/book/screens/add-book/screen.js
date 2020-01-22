import React from 'react'

export default class AddBookScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookFormData: [],
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        const responseStatus = nextProps.responseObject ? nextProps.responseObject.data.responseCode : ''
        const response = nextProps.responseObject ? nextProps.responseObject.data : ''
    }

    onSubmitButtonClick = () => {
        this.props.addBook(this.state.bookFormData)
    }

    render() {
        return <React.Fragment>
        
        </React.Fragment>
    }
}