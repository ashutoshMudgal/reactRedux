import React, { Component } from 'react';
import { connect } from 'react-redux'
import {selectBook} from '../actions'
import { bindActionCreators } from 'redux'

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li onClick ={()=>this.props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>
			)
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	//whatever is returned will soow up as props
	//inside of bookList
	return {
		"books": state.books
	}
}

function mapDispatchToProps(dispatch) {
	//whatever is returned will soow up as props
	//inside of bookList
	//whenever selectBook is called, the result should be passed to all the reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//promote bookList from a component to a container - 
//it needs to know about the new dispatched method, selectBood. 
//make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)