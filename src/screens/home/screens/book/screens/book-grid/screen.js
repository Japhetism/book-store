import React from 'react'

export default class BookGridScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookFormData: [],
        }
    }

    componentDidMount () {
        this.props.getBooks()
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        const responseStatus = nextProps.responseObject ? nextProps.responseObject.data.responseCode : ''
        const response = nextProps.responseObject ? nextProps.responseObject.data : ''
    }

    render() {
        return <React.Fragment>
            <div>
                ddddddddddd
            </div>    
        </React.Fragment>
    }
}