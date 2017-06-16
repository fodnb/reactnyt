var React = require('react');
var axios = require('axios');
var helpers = require('./../utils/helpers.js')

class Results extends React.Component {
	constructor(props){
	super(props);
	

	}

	handleSubmit(data){
		// event.preventDefault();           
		console.log('Called handleSubmit');
		console.log('this, when handleSubmit is invoked');
		console.log(data);

		helpers.postHistory(data.title, data.link, data.date);
	}

	render(){

		console.log("----------");
        console.log(this.props.results);
        console.log("----------");
		var myData = this.props.results;



		return(
			<div className="container">
			<h2> Results </h2>

			<ul>
   
      	{myData.map((item)=>{
 		// console.log('inside handleSubmit');
   		//console.log(this.handleSubmit);
		this.handleSubmit = this.handleSubmit.bind(this);

        return (

        	<li
        	key={item.index}
        	>
        	<input 
        		type="button"
	        	key={item.index} 
	        	value="save"
	        	name={item.index}
	        	onClick={() => this.handleSubmit(item)}
	        	
        	      	/>
        	{item.title}{item.link}{item.date}{item.index}
        	
        	</li>
        	)
      })};
   
    </ul>






			
		
			</div>


		
			)
	}


}

module.exports = Results;