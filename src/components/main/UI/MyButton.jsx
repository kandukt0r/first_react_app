import { Button, CardActions } from '@mui/material'
import React from 'react'

export default function MyButton({ card, setOrder }) {
	return (
		<CardActions>
			<Button
				size="small"
				color="primary"
				variant='contained'
				onClick={() =>
					setOrder({
						id: card.id,
						title: card.title,
						price: card.price,
					})
				}
			>
				{card.action}
			</Button>
		</CardActions>
	)
}
