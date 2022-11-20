import { AppBar, IconButton, Toolbar, Typography} from '@mui/material'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import React from 'react'

export default function Header() {
	return (
		<AppBar position='static' >
			<Toolbar>
				<IconButton color='inherit'>
					<MenuIcon />
				</IconButton>
				<Typography sx={{flexGrow:1}}>
					MAGIC BEADS
				</Typography>
				
				<IconButton color='inherit'>
					<ShoppingBasketIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}
