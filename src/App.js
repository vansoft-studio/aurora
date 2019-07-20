import React, { Component } from 'react';
import './App.css';
import SimpleTable from './components/simple-table'
import { Grid } from '@material-ui/core';

const tableHeader = { 1: 'Name', 2: 'Age', 3: 'Gender', 4:'Member' }
const tableData =  [{ 1: 'Sankar', 2: '21', 3: 'M', 4:  true}, 
					{ 1: 'Aji', 2: '23', 3: 'M', 4: false},
					]

class App extends Component {
	render () {
		return (
			<div className='App'>
				<Grid item xs={8}>
					<SimpleTable
						TableHeader={tableHeader}
						TableData={tableData}
						Switch='4'
						CheckBox />
				</Grid>
			</div>
		)
	}
}
export default App
