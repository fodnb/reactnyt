var React = require('react');
var axios = require('axios');

class Results extends React.Component {


	render(){

		var myData = this.props.data;
		
		console.log("data in results");
	


		return(
			<div className="container">
			<h2> Results </h2>
			<ul className="things">
			{myData.map(function(thing, i){
				return (
					<li
					key={i}
					>
					<button 
					
					className="btn btn-primary">
					Save
					</button>
					Title: {thing.title} 

					</li>
					)
			}, this)}
			
			</ul>
			</div>


		
			)
	}


}

module.exports = Results;