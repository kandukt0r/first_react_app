import React from "react";
import { useState } from "react";
import './styles/App.css'
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import MyAlert from "./components/main/UI/MyAlert";
import BasketPanel from "./components/BasketPanel/BasketPanel";
import Footer from "./components/footer/Footer";

function App() {
	const [isBasketPanelOpen, setBasketPanelOpen] = useState(false)
	const [order, setOrder] = useState([])
	const [isAlertOpen, setAlertOpen] = useState(false)
	const [isTitleForAlert, setTitleForAlert] = useState('')

	const addToOrder = (goodsItem) => {
		let quantity = 1

		const indexInOrder = order.findIndex(
			(item) => item.id === goodsItem.id
		)

		if (indexInOrder > -1) {
			quantity = order[indexInOrder].quantity + 1

			setOrder(order.map((item) => {
				if (item.id !== goodsItem.id) return item

				return {
					id: item.id,
					title: item.title,
					price: item.price,
					quantity,
				}
			}),
			)
		} else {
			setOrder([
				...order,
				{
					id: goodsItem.id,
					title: goodsItem.title,
					price: goodsItem.price,
					quantity,
				},
			],
			)
		}
		setAlertOpen(true)
		setTitleForAlert(goodsItem.title)
	}

	const removeFromOrder = (goodsItem) => {
		setOrder(order.filter((item) => item.id !== goodsItem))
	}

	return (
		<div className="App">
			<Header
				handleBasketPanel={() => setBasketPanelOpen(true)}
				orderLength={order.length}
			/>
			<Main
				setOrder={addToOrder}
			/>
			<Footer />
			<BasketPanel
				order={order}
				removeFromOrder={removeFromOrder}
				isBasketPanelOpen={isBasketPanelOpen}
				closeBasketPanel={() => setBasketPanelOpen(false)}
			/>
			<MyAlert
				isOpenAlert={isAlertOpen}
				handleCloseAlert={() => setAlertOpen(false)}
				title={isTitleForAlert}
			/>
		</div>
	)
}

export default App;
