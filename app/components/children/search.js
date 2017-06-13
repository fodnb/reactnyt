const React = require('react');
const Query = require('./query.js');
const Results = require('./results.js');
// quieries the NYT API for articles.  Displays API search results.
//


class Search extends React.Component {
	console.log(this.props)
	render(){
	return(
		<div className="search">
		

		<Query setTerm={this.props.setTerm} />
		<Results data={this.props.results} />

		</div>
		)
}
}
module.exports = Search;