import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 160,
		maxWidth:345,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function MySelect({options, defaultValue, value, onChange}) {

	const classes = useStyles();

	return (
		<FormControl variant="outlined" className={classes.formControl}>
			<InputLabel id="demo-simple-select-outlined-label">Отсортировать</InputLabel>
			<Select
				labelId="demo-simple-select-outlined-label"
				id="demo-simple-select-outlined"
				value={value}
				onChange={e => onChange(e.target.value)}
				label="Отсортировать"
			>
				<MenuItem value='' disabled>{defaultValue}</MenuItem>
				{options.map(option => 
					<MenuItem key={option.value} value={option.value}>
						{option.name}
					</MenuItem>
				)}
			</Select>
		</FormControl>
	)
}
