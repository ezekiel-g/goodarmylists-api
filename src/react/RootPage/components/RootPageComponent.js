import style from '../../../assets/stylesheets/index.module.css'
import React from 'react'

const RootPageComponent = props => {
	return (
		<div className={style['root-page-component']}>
			{props.id}
		</div>
	)
}

export default RootPageComponent