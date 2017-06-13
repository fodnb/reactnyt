const React = require('react');


class Query extends React.Component {
constructor(props){
	super(props);
	console.log(props);
	this.state = {
		newterm: "",
		startDate: "",
		endDate: ""

	};
	console.log(this.state);
	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}





	handleChange(event) {
			console.log(this); {/* undefined */}
			console.log("eventtargetvalue");
			console.log(event.target.value);



    const target = event.target;
    const value = target.value;
    const name = target.name;

   			 this.setState({
     			 [name]: value
   			 });
			
}
	

  handleSubmit(event) {
        event.preventDefault();           
  			console.log(this);
    		console.log(this.state.newterm);
    	
    		
    		for(var i =0; i<10; i++){
    		this.state.startDate = this.state.startDate.replace("-", "");
    	}
    		console.log(this.state.startDate);
    	    for(var i =0; i<10; i++){
    		this.state.endDate = this.state.endDate.replace("-", "");
    	}	

    		this.props.setTerm(this.state.newterm, this.state.startDate, this.state.endDate);
    		console.log(this.state.newterm + this.state.startDate, this.state.endDate);
    		this.setState({newterm: "", startDate: "", endDate: ""})
  }


	
        render() {
            return ( 	
	
	

	
<div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4>
                <strong>Add something to search for</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                value={this.state.newterm}
                type="text"
                className="form-control text-center"
                id="newterm"
                name="newterm"
                onChange={this.handleChange}
                required
              />
              <h4>
                <strong>Add Start Date for Search</strong>
              </h4>	  
              <input
                value={this.state.startDate}
                type="date"
                className="form-control text-center"
                id="startDate"
                name="startDate"
                onChange={this.handleChange}
                required
              />
              <h4>
                <strong>Add End Date for Search</strong>
              </h4>
              <input
                value={this.state.endDate}
                type="date"
                className="form-control text-center"
                id="endDate"
                name="endDate"
                onChange={this.handleChange}
                required
              />
              <br />
              <input
              	value="Submit"
                className="btn btn-primary"
                type="submit"
              />
               
              
            </div>
          </form>
        </div>
      </div>
            )
        }


}

module.exports = Query;
