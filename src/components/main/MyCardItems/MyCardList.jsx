import React from 'react'
import { Grid } from '@mui/material'
import MyCardItem from './MyCardItem'

export default function MyCardList({ cards, setOrder }) {
	return (
		<>
			<Grid container spacing={2} sx={{ mt: 1 }}>
				{cards.map(card =>
					<MyCardItem card={card} key={card.id} setOrder={setOrder} />
				)}
			</Grid>
		</>
	)
}
