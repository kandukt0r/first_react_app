import { CardContent, Typography } from '@mui/material'
import React from 'react'


export default function MyCardContent({ card }) {
	return (
		<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
				{card.title}
			</Typography>
			<Typography
				variant="body2"
				color="textSecondary"
				component="p"
				sx={{ mb: '20px' }}
			>
				{card.body}
			</Typography>
			<Typography
				variant='body'
			>
				цена: {card.price}
			</Typography>
		</CardContent>
	)
}
