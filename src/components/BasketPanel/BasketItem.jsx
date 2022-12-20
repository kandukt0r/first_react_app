import React from 'react'
import { ListItem, Typography, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'

export default function BasketItem({ removeFromOrder, id, title, price, quantity }) {
	return (
		<ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<Typography
				variant="body1"
			>
				{title}: {price} руб x {quantity}
			</Typography>
			<IconButton
				onClick={() => removeFromOrder(id)}
			>
				<Close />
			</IconButton>
		</ListItem>
	)
}
