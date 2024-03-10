
import React,{Component} from 'react'



class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 0,
        }
        console.log('constructor')
    }
    componentDidMount(){
        console.log('component did mount');
    }
    componentDidUpdate(){
        console.log('component did update');
    }
    
    incrementCount(){
        this.setState({count: this.state.count+1});
        // console.log(this.state);
    }
    render(){
        console.log('render');
        return(
            <>
            <h1>Profile</h1>
            <h2>name: {this.props.name}</h2>
            <h3>count: {this.state.count}</h3>
            <h4>count2: {this.state.count2}</h4>
            <button onClick={() => this.incrementCount()}>increment count</button>
            </>
        )
    }
}

export default Profile;