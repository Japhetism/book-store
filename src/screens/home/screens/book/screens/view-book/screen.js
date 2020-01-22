import React from 'react'

export default class ViewBookScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookFormData: [],
        }
    }

    componentDidMount () {
        const bookNumber = 1
        this.props.getBook(bookNumber)
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        const responseStatus = nextProps.responseObject ? nextProps.responseObject.data.responseCode : ''
        const response = nextProps.responseObject ? nextProps.responseObject.data : ''
    }
    render() {
        return <React.Fragment>
            </React.Fragment>
    }
}