var React = require('react');

var Page=React.createClass({
  getInitialState:function()
  {
    // questionpaper,document,richtext,video,scormpackage,webresource
    // {'title':"topic","resource_id":200,"resource_type":"questionpaper","url":"dadas.com"}
    return {full_data:["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10","question11"],
        page_data:["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10"],
        newData:[]};
  },
 
  showData:function(button_idx)
  {
    button_idx=button_idx-1;
    button_idx*=10;
    start=button_idx;
    button_idx+=9;
    end=button_idx;
    var temp=[];
    t_len=this.state.full_data.length;
    for(i=start;i<t_len&&i<=end;i++)
    {
      temp.push(this.state.full_data[i]);
    }
    this.setState({
      page_data:temp
    });
  },
  
  jump:function(move)
  {
    t_len=this.state.full_data.length;
    t_len_s=t_len/10;
    t_len_s=Math.floor(t_len_s);
    t_len_s*=10;

    var temp=[];
    if(move=='extreme_r')
    {
      for(i=t_len_s;i<t_len&&i<=(t_len_s+9);i++)
      {
        temp.push(this.state.full_data[i]);
      }
    }
    else if(move=='extreme_l')
    {
      for(i=0;i<t_len&&i<=9;i++)
      {
        temp.push(this.state.full_data[i]);
      }
    }
    this.setState({
      page_data:temp
    });

  },
  handleAdd: function(e)
  {
   var x = this.state.newData; 
  
 var fulldata=this.state.full_data;
 var pagedata=this.state.page_data;
  var t = pagedata.splice(e,1);

  x.push(t);
  fulldata.splice(e,1);
  this.setState({full_data:fulldata,page_data:pagedata,newData:x})

  },
  handleDelete: function(e)
  {
 var newa = this.state.newData;
 var fulldata=this.state.full_data;
 var pagedata=this.state.page_data;
 var ne = newa.splice(e,1);
 pagedata.push(ne);
 fulldata.push(ne)
this.setState({full_data:fulldata,page_data:pagedata,newData:newa})
  },
  render:function()
  {

    count_buttons=this.state.full_data.length/10+1;
    data=this.state.page_data;
    console.log(data);
    var buttons=[];
    for(i=1;i<=count_buttons;i++)
    {
      buttons.push(i);
    }
    var  n = this.state.newData;
   var newquestion = n.map(function(newques,i){
return <tr key={i}><td>{newques}</td><td><button onClick={this.handleDelete.bind(this,i)}>Remove</button></td></tr>;
   },this);
   var questions = data.map(function(ques,i){
    var a = [];
    return <tr key={i}><td>{ques}</td><td><button onClick={this.handleAdd.bind(this,i)}>Add</button></td></tr>;
   },this);
    var actual_buttons=buttons.map(function(button_val,x){
      return (
        <span key={x}>
          <button className="btn btn-primary btn-sm" onClick={this.showData.bind(this,button_val)} >{button_val}</button>
        </span>
        );
    },this);

    return(
      <div className="container">
        <div className="col-sm-5" id="a"> 
<table className="table table-striped">
<tbody>
<h1>Question Added </h1>
{newquestion}
</tbody>
</table>
</div>  
<div className="col-sm-7">      
  <table className="table table-striped">
    <h1>questions</h1>
    <tbody>

{questions}
    </tbody>
  </table>
  <button className="btn btn-primary btn-sm" onClick={this.jump.bind(this,'extreme_l')} >FirstPage</button>
          {actual_buttons}
        <button className="btn btn-primary btn-sm" onClick={this.jump.bind(this,'extreme_r')} >LastPage</button>
  </div>

      </div>
      );
  }
});

module.exports=Page;