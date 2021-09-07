import style from '../../../assets/stylesheets/index.module.css'
import React, { Component } from 'react'
import RootPageComponent from '../components/RootPageComponent'

class RootPageContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tableItems: []
		}
	}

	componentDidMount() {
		// fetch('/api/v1/table-name')
		// .then(response => {
		// 	if (response.ok) {
		// 		return response
		// 	} else {
		// 		let errorMessage = `${response.status} (${response.statusText})`,
		// 		error = new Error(errorMessage)
		// 		throw(error)
		// 	}
		// })
		// .then(response => response.json())
		// .then(body => {
		// 	this.setState({ tableItems: body })
		// })
		// .catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	render() {
		let tableIds
		if (this.state.tableItems.length !== 0) {
			tableIds = this.state.tableItems.map(item => {
				return (
					<RootPageComponent
						key={item.id}
						id={item.id}			
					/>
				)
			})
		} else {
			tableIds =
				<RootPageComponent
					key={0}
					id={'Nothing returned'}			
				/>
		}

		return (
			<div>
				<h1 className={style['root-page-title']}>React-Express-MySQL Starter</h1>
				<h3>This is RootPageContainer.js</h3>
				<div>(react-express-mysql-starter --> src --> react --> RootPage --> containers --> RootPageContainer.js)</div>
				<br />
				<div>Configure the 'pool' object in the server.js file to connect to your MySQL database.</div>
				<div>Change the table name in the url and SQL queries in the server.js file.</div>
				<div>Change the table name in the url in the ComponentDidMount method in this page's code.</div>
				<div>Add routes in App.js inside the HashRouter.</div>
				<div>Style everything from an imported module (see the code for this page's title).</div>
				<div>The 'id' field of anything being fetched from the database should appear below.</div>
				<br />
				{tableIds}
			</div>
		)
	}
}

export default RootPageContainer