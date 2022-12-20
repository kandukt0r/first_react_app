import { Card, CardActionArea, CardMedia, Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import MyButton from '../UI/MyButton';
import MyCardContent from './MyCardContent';


const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 400,
	},
});


export default function MyCardItem({ card, setOrder }) {

	const classes = useStyles();

	return (
		<Grid item xs={12} md={4} sx={{ alignItems: 'stretch' }}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						component='img'
						src={card.src}
					/>
					<MyCardContent
						card={card}
					/>
				</CardActionArea>
				<MyButton
					card={card}
					setOrder={setOrder}
				/>
			</Card>
		</Grid>
	)
}
