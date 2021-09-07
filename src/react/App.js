import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import RootPageContainer from './RootPage/containers/RootPageContainer'

const App = props => {
	return (
		<HashRouter>
			<Route path='/' exact component={RootPageContainer} />			
		</HashRouter>
	)
}

export default App