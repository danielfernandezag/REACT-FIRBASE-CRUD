import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../redux/actions/notesActions';
import './Table.css';

class Table extends Component {
	render() {
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th colSpan={2}>To-do</th>
						<th colSpan={2}>Done</th>
						<th />
						<th />
					</tr>
					<tr>
						<th>date</th>
						<th>task</th>
						<th>date</th>
						<th>done</th>
						<th />
						<th />
					</tr>
				</thead>
				<tbody id='table-todos'>
					{this.props.notes.map(note => (
						<tr key={note.id} className={note.id % 2 === 0 ? 'r-pair' : 'r-prime'}>
							<td>{note.id}</td>
							<td>{note.text}</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}

const mapDispatchToProps = {
	addNote
};

const mapStateToProps = state => ({
	notes: state.notesState.notes
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Table);
