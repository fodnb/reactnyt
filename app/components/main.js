const React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
const Saved = require('./children/saved.js');
const Search = require('./children/search.js');
const helpers = require('./utils/helpers.js');

var PropTypes = require("prop-types");
var Nav = require("./children/Nav");
// require("./public/style.css");


// contains the main container div that holds the main layout and 
//navigation.  This component should also be able ot hold sub components
//search & saved.

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			newterm: '',
			sDate: "",
			eDate: "",
			results: [],
			history: []
		}
		this.setTerm = this.setTerm.bind(this);
	}

	setTerm(term, startDate, endDate){
		this.setState({newterm: term, sDate: startDate, eDate: endDate})
	}

	componentDidMount(){
		helpers.getHistory().then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("History", response.data);
        this.setState({ history: response.data });
      }
    }.bind(this));
	}


	  componentDidUpdate() {

    // Run the query for the address
    helpers.runQuery(this.state.newterm, this.state.sDate, this.state.eDate).then(function(data) {
      	console.log("data");
      	console.log(data);
      if (data !== this.state.results) {
        console.log(data);
        this.setState( {results: data} );
        

        // After we've received the result... then post the search term to our history.
        helpers.postHistory(this.state.newterm).then(function() {
          console.log("Updated!");

          // After we've done the post... then get the updated history
         helpers.getHistory().then(function(response) {
            console.log("Current History", response.data);

            console.log("History", response.data);

            this.setState({ history: response.data });

          }.bind(this));
        }.bind(this));
      }
    }.bind(this));
  }
	render(){



		return(
			<div className="container">	
			<div className="jumbotron">
          <h1 className="panel-title text-center">NY TIMES REACT APP</h1>
       		</div>

				
				<Saved />
				<Search results={this.state.results} setTerm={this.setTerm} />
		

			</div>



			)
	}
}

module.exports = App;

