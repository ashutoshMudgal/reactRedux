import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component {
	constructor(props){
		super(props)
		this.state={videos:[],selectedVideo:null};
	}


	render(){
		return(
		<div>
		test
		</div>
		)
	}
}

 ReactDom.render(<App />,document.querySelector('.container'));