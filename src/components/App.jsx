import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../redux/actions/userActions';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='App'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-7'>
							<table className='table table-hover'>
								<thead>
									<tr>
										<th colSpan={2}>Estudios a convalidar</th>
										<th colSpan={2}>Estudios a Aportados</th>
										<th />
										<th />
									</tr>
									<tr>
										<th>Ciclo</th>
										<th>Modulo</th>
										<th>Ciclo</th>
										<th>Modulo</th>
										<th />
										<th />
									</tr>
								</thead>
								<tbody id='tabla-con-convalidaciones'>{''}</tbody>
							</table>
						</div>
						<div className='col-sm-1'>
							<div id='form-separador' />
						</div>
						<div className='col-sm-4'>
							<form id='form-convalidaciones'>
								<div className='form-group'>
									<label htmlFor='modulo-a-convalidar'>Modulo a convalidar</label>
									<input type='text' className='form-control' name='moduloAConvalidar' value='' id='modulo-a-convalidar' />
								</div>
								<div className='form-group'>
									<label htmlFor='ciclo-a-convalidar'>Ciclo a convalidar</label>
									<br />
									<input type='text' className='form-control' name='cicloAConvalidar' value='' id='ciclo-a-convalidar' />
								</div>
								<div className='form-group'>
									<label htmlFor='modulo-aportado'>Modulo aportado</label>
									<br />
									<input type='text' className='form-control' name='moduloAportado' value='' id='modulo-aportado' />
								</div>
								<div className='form-group'>
									<label htmlFor='ciclo-aportado'>Ciclo aportado</label>
									<br />
									<input type='text' className='form-control' name='cicloAportado' value='' id='ciclo-aportado' />
								</div>
								<input type='submit' className='btn btn-primary' name='' value='Crear Convalidacion' />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	login,
	logout
};

const mapStateToProps = state => ({
	user: state.userState
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
