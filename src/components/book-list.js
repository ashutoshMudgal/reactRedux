import React, {Component} from 'react';

export default class BookList extends Component {
	renderList() {
		retur this.props.books.map((book)=>{
			return(
				<li key = {book.title} className="list-group-item">{book.title}</li>
			)
		})
	}

	rendor() {
		return(
		<ul className = "list-group col-sm-4">
			{this.renderList()}
		</ul>
		)
	}
}