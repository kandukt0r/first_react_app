import { Link, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react'
import Classes from './Footer.module.css'

export default function Footer() {
	return (
		<Box height={100} className={Classes.footer}>
			<Container className={Classes.footer_container} sx={{display:'flex'}}>
				<Box className={Classes.footer_body}>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p">
						Россия
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						Magic Beads 2022
					</Typography>
				</Box>
				<hr className={Classes.footer_hr}/>
				<Box className={Classes.footer_body}>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p">
						Все права защищены
					</Typography>
					<Link
						href='https://www.instagram.com/alikstraza/'
						className={Classes.footer_link}
					>
						<InstagramIcon />
					</Link>
				</Box>
			</Container>
		</Box>
	)
}
