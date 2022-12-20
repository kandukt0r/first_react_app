import React from 'react'
import classes from '../Styles/MyStyles.module.css'
import MyInput from '../UI/MyInput'
import MySelect from '../UI/MySelect'

export default function MyCardFilter({ filter, setFilter }) {
	return (
		<div className={classes.mySelectSearch}>
			<MyInput
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
			/>
			<MySelect
				value={filter.sort}
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				defaultValue='Отсортировать'
				options={[
					{ value: 'title', name: 'По названию' },
					{ value: 'price', name: 'По цене' },
				]}
			/>
		</div>
	)
}
