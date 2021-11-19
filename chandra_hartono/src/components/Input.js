import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component {
	constructor(){
		super();
		
		this.state = {status : ''}
	}
	
	render() {
		return(
			<div className="input">
				<input type="text" name="status" placeholder="Enter Your Name"
					onChange={(ev)=> this.props.getValues(ev.target.name,
					ev.target.value)} />
			
				<input type="text" name="status" placeholder="Enter Your Status"
					onChange={(ev)=> this.props.getValues(ev.target.name,
					ev.target.value)} />
			</div>
		);
	}
}
	
//Latihan 4.9, Update state dengan input
//	render(){
//		return (
//			<div className="input">
//			
//				<input type="text" name="status" placeholder="Enter Your Status"
//				onChange={(ev)=> this.setState({status : ev.target.value})} />
//				<p>Your status : {this.state.status}</p>
//			</div>
// 		);
// 	}
// }