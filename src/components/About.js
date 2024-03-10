import React, { Component } from 'react'
import Profile from './Profile';



class About extends Component{
  constructor(props){
    super(props);
    console.log('parent-constructor')
  }

  componentDidMount(){
    console.log('parent component did mount');
  }
  render(){
    console.log('parent render')
    return (
      <div><Profile name='viswa'/></div>
    )
  }
}

export default About;