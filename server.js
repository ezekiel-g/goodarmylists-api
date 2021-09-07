const express = require('express')
const dbModule = require('mysql')
const bodyParser = require('body-parser')

const app = express()
const port = 3001
const pool = dbModule.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'goodarmylists_db'
})
const queries = {
	getKowArmies: 'SELECT * FROM kow_armies;',
	getKowUnits: 'SELECT * FROM kow_units;',
	getKowUnitOptions: 'SELECT * FROM kow_unit_options;',
	getKowArtifacts: 'SELECT * FROM kow_artifacts;'
	// getItem: 'SELECT * FROM table-name WHERE id = ?',
	// addItem: 'INSERT INTO table-name (column-name) VALUES ?',
	// editItem: 'UPDATE table-name SET column-name = ? WHERE id = ?',
	// deleteItem: 'DELETE FROM table-name WHERE id = ?'
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/v1/kow_armies', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query(queries.getKowArmies, (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

app.get('/api/v1/kow_units', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query(queries.getKowUnits, (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

app.get('/api/v1/kow_unit_options', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query(queries.getKowUnitOptions, (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

app.get('/api/v1/kow_artifacts', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query(queries.getKowArtifacts, (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

// app.get('/api/v1/table-name/:id', (request, response) => {
// 	pool.getConnection((error, connection) => {
// 		if (error) throw error
// 		connection.query(queries.getItem, [request.params.id], (error, rows) => {
// 			connection.release()
// 			if (!error) {
// 				response.send(rows)
// 			} else {
// 				console.log(error)
// 			}
// 		})
// 	})
// })

// app.post('/api/v1/table-name', (request, response) => {
// 	pool.getConnection((error, connection) => {
// 		if (error) throw error
// 		connection.query(queries.addItem, [request.body.columnName], (error, rows) => {
// 			connection.release()
// 			if (!error) {
// 				response.send(rows)
// 			} else {
// 				console.log(error)
// 			}
// 		})
// 	})
// })

// app.patch('/api/v1/table-name/:id', (request, response) => {
// 	pool.getConnection((error, connection) => {
// 		if (error) throw error
// 		connection.query(queries.editItem, [request.body.columnName, request.params.id], (error, rows) => {
// 			connection.release()
// 			if (!error) {
// 				response.send(`ID ${response.body.id} edited`)
// 			} else {
// 				console.log(error)
// 			}
// 		})
// 	})
// })

// app.delete('/api/v1/table-name/:id', (request, response) => {
// 	pool.getConnection((error, connection) => {
// 		if (error) throw error
// 		itemId = request.params.id
// 		connection.query(queries.deleteItem, [request.params.id], (error, rows) => {
// 			connection.release()
// 			if (!error) {
// 				response.send(JSON.stringify(`ID ${itemId} deleted`))
// 			} else {
// 				console.log(error)
// 			}
// 		})
// 	})
// })

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
