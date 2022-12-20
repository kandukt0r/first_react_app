import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import { ShoppingBasket } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'




export default function Header({ handleBasketPanel, orderLength }) {

	return (
		<AppBar
			position='static'
		>
			<Toolbar>
				<IconButton color='inherit'>
					<MenuIcon />
				</IconButton>
				<Typography sx={{ flexGrow: 1 }}>
					MAGIC BEADS
				</Typography>
				<IconButton
					color='inherit'
					onClick={handleBasketPanel}
				>
					<Badge
						color='secondary'
						badgeContent={orderLength}
					>
						<ShoppingBasket />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}
