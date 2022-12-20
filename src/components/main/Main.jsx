import React, { useMemo, useState } from 'react'
import { Container } from '@mui/system'
import MyCardList from './MyCardItems/MyCardList'
import classes from './Styles/MyStyles.module.css'
import MyCardFilter from './MyCardItems/MyCardFilter'
import { cardsData } from '../../data/cardsData'





export default function Main({ setOrder }) {
	const [cards, setCards] = useState(cardsData)
	const [filter, setFilter] = useState({ sort: '', query: '' })


	const sortedCards = useMemo(() => {
		if (filter.sort) {
			return [...cards].sort((a, b) => `${a[filter.sort]}`.localeCompare(`${b[filter.sort]}`))
		}
		return cards
	}, [filter.sort, cards])

	const sortedAndSearchedCards = useMemo(() => {
		return sortedCards.filter(card => card.title.toLowerCase().includes(filter.query.toLowerCase()))
	}, [filter.query, sortedCards])

	return (
		<Container className={classes.main}>
			<MyCardFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<MyCardList
				cards={sortedAndSearchedCards}
				setOrder={setOrder}
			/>
		</Container>
	)
}
