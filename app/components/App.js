var React = require('react');
var {Table, Column, Cell} = require('fixed-data-table');
//var Page=require('./Page.js');
var App = React.createClass({
	 getInitialState: function() {
    return {
questioninput: ["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10","question11"]
    };
},
 handleAdd:function(e)
 {

    // alert(e.target.value);
  
 },
	render: function(){
	var questions = this.state.questioninput.map(function(ques){
   	var a = [];
  
   	return <tr><td>{ques}</td><td><button>Add</button></td></tr>;
   });
		return (
			<div className="container">
<div className="col-sm-5"> 
<table className="table table-striped">
</table>
</div>  
<div className="col-sm-7">      
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Questions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
{questions}
    </tbody>
  </table>
  </div>
  </div>
);
	}
	
});
module.exports = App;