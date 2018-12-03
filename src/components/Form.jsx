import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
	render() {
		return (
			<form id='form-todos'>
				<div className='form-group'>
					<label htmlFor='date-to-do'>Date to be done</label>
					<input type='date' className='form-control' name='dateToDo' value='' id='date-to-do' />
				</div>
				<div className='form-group'>
					<label htmlFor='thing-to-do'>Thing to do</label>
					<br />
					<input type='text' className='form-control' name='thingToDo' value='' id='thing-to-do' />
				</div>
				<div className='form-group'>
					<label htmlFor='date-done'>Date done</label>
					<br />
					<input type='date' className='form-control' name='dateDone' value='' id='date-done' />
				</div>
				<div className='form-group'>
					<label htmlFor='thing-done'>Thing done</label>
					<br />
					<input type='text' className='form-control' name='thingDone' value='' id='thing-done' />
				</div>
				<input type='submit' className='btn btn-primary' name='' value='Create task' />
			</form>
		);
	}
}
