import React, { Component } from 'react';
import { connect } from 'react-redux'
class BookDetails extends Component {
    render() {
        console.log(this.props)
        if (!this.props.book) {
            return (
                <div>
                    <div>select a book to get started!</div>
                </div>)
        }
        return (
            <div>
                <h3>details for:</h3>
                <div>title:{this.props.book.title}</div>
                <div>description:{this.props.book.pages}</div>
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails)