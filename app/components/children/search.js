const React = require('react');
const Query = require('./query.js');
const Results = require('./results.js');
// quieries the NYT API for articles.  Displays API search results.
//


class Search extends React.Component {

	render(){
		console.log("----------");
        console.log(this.props.results);
        console.log("----------");

	return(
		<div className="search">


		<Query setTerm={this.props.setTerm} />
		<Results results={this.props.results} />

		</div>
		)
}
}
module.exports = Search;