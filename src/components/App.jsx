import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../redux/actions/userActions';
import { getNotes } from '../redux/actions/notesActions';
import Table from './Table';
import Form from './Form';
import './App.css';

class App extends Component {
	componentDidMount() {
		this.props.getNotes();
	}

	render() {
		return (
			<div className='App'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-7'>
							<Table />
						</div>
						<div className='col-sm-1'>
							<div id='form-separador' />
						</div>
						<div className='col-sm-4'>
							<Form />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	login,
	logout,
	getNotes
};

const mapStateToProps = state => ({
	user: state.userState
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
