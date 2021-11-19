import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './App.css';
import Home from './views/Home/Home';
import Home from './views/About/About';
import Home from './views/Help/Help';


class App extends Component {
	
constructor(){
	super();
	this.state = {
		view : 'home'
	}
}

	render(){
		const View = ()=>{
		if(this.state.view == 'home')
		return <Home name="Eden Hazard" />
		else if(this.state.view == 'about')
		return <About />
		else if(this.state.view == 'help')
		return <Help />
	}

	return (
		<div> 
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a onClick={()=> this.setState({view : 'home'})}
						className="nav-link" href="#">
							Home
						</a>
					</li>

					<li className="nav-item">
						<a onClick={()=> this.setState({view : 'about'})}
						className="nav-link" href="#">
							About
						</a>
					</li>

					<li className="nav-item">
						<a onClick={()=> this.setState({view : 'help'})}
						className="nav-link" href="#">
							Help
						</a>
					</li>
				</ul>
			</nav>

			<View />
		</div>
	);
	}
}


//Latihan 4.4, Props
//function Message(props) {
//	return <p>Hello {props.name},</p>;
//}

//class App extends Component {
	
//	render() {
//		return (
//			<div>
//				<Message name="Ulrich" />
//				<Home name="Eden Hazard" />
//			<div>
//		);
//	}
//}



//Latihan 4.3, Class Component
//function Message() { 
//	return "Pesan didalam Component";
//}

//class App extends Component {
	
//	render() {
//		return (
//			<div>
//				<Message />
//				<Home />
//			<div>
//		}
//	}
//}



//Latihan 4.2, penggunaan function javascript sebagai komponen
//function Message() {
//	return <p>Hello from message component</p>
//}

//class App extends Component {
//	render() {
//		return (
//			<div>
//				<Message />
//			<div>
//		}
//	}
//}

//Latihan 4.1, Penggunana function pada Reactjs
//function sayHello() {
//	return "Hello World";
//}

//class App extends Component {
//	bilangHalo() {
//		return "Halo Dunia";
//	}
	
//	render() {
//		return {
//			<>
//				<p>sayHello : <b>{sayHello()}</b></p>
//				<p>bilangHalo : <b>{this.bilangHalo()}</b>
//			</>
//		}
//	}
//}

export default App;
	