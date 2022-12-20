import React from 'react'
import { Drawer } from '@material-ui/core'
import { Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { ShoppingBasket } from '@material-ui/icons'
import BasketItem from './BasketItem'

export default function BasketPanel({ isBasketPanelOpen, closeBasketPanel, order = [], removeFromOrder }) {
	return (
		<Drawer
			anchor='right'
			open={isBasketPanelOpen}
			onClose={closeBasketPanel}
		>
			<List sx={{ width: '30em' }}>
				<ListItem>
					<ListItemIcon>
						<ShoppingBasket />
					</ListItemIcon>
					<ListItemText primary='Корзина' />
				</ListItem>
				<Divider />
				{!order.length ? (
					<ListItem>Корзина пуста!</ListItem>
				) : (
					<>
						{order.map((item) => (
							<BasketItem key={item.title} removeFromOrder={removeFromOrder} {...item} />
						))}
						<Divider />
						<ListItem>
							<Typography sx={{ fontWeight: 700 }}>
								Общая стоимость: {' '}
								{order.reduce((acc, item) => {
									return acc + item.price * item.quantity;
								}, 0)}{' '}
								рублей.
							</Typography>
						</ListItem>
					</>
				)}
			</List>
		</Drawer>
	)
}
