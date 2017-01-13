var React=require('react');
var ReactDOM= require('react-dom');
var App=require('./Page');
var Data=React.createClass({
	render:function()
{
	var json =[
	"question1",
	"question2",
	"question3",
	"question4",
	"question5",
	"question6",
	"question7",
	"question8",
	"question9",
	"question10",
	"question11",
	"question12",
	]
    return(
        <div>
        <div>
        
    <Page json={json}/>
    </div>
    
    </div>
    );
}
	});
module.exports=Data;