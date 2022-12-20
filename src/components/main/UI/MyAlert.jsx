import React from 'react'
import { Alert, Snackbar } from '@mui/material'

export default function MyAlert({ title, isOpenAlert, handleCloseAlert }) {
	return (
		<Snackbar
			open={isOpenAlert}
			onClose={handleCloseAlert}
			autoHideDuration={1500}
		>
			<Alert severity="success">{title} добавлен в корзину!</Alert>
		</Snackbar>
	)
}
