import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, CardActions, Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'


const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 400,
	},
});


export default function ItemCard(props) {

	const classes = useStyles();

	return (
		<Grid item xs={12} md={4} sx={{ alignItems: 'stretch' }}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						component='img'
						src={props.src}
						title={props.title}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{props.title}
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
							sx={{ mb: '20px' }}
						>
							{props.body}
						</Typography>
						<Typography
							variant='body'
						>
							{props.price}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary" variant='outlined'>
						{props.action}
					</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}
