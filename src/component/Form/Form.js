import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateForm } from '../../ducks/reducers/form';

class Form extends Component {
  constructor() {
    super();

    this.state = {
     title:'',
     image_URL:'',
     content:''
    };
  }

  componentDidMount(){
      let{title,image_URL,content}= this.props;
      this.setState({title,image_URL,content})
  }
  updatetitle=(e)=>{
      this.setState({title:e.target.value})
  }
  updateImage_URL=(e)=>{
      this.setState({image_URL:e.target.value})
  }
  
  updateContent=(e)=>{
      this.setState({content:e.target.value})
  }


  render() {
      let {title,image_URL,content}=this.state
    return <div>

       <input type='text' value={title} onChange={this.updatetitle}/>
       <input type='text' value={image_URL} onChange={this.updateImage_URL}/>
       <input type='text' value={content} onChange={this.updateContent}/>
    </div>;
  }
}

function mapStateToProps(state){
    let {title,image_URL,content} = state;
    return{title,image_URL,content}
}
