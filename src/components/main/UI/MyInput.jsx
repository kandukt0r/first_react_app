import React from 'react'
import { TextField } from '@material-ui/core'
import classes from '../Styles/MyStyles.module.css'

export default function MyInput(props) {

	return (
		<TextField
			id="filled-basic"
			label="Найти..."
			type='search'
			size='medium'
			variant='outlined'
			className={classes.myInput}
			style={{ marginBottom: '20px' }}
			{...props}
		/>
	)
}
