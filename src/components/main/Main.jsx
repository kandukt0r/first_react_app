import React, { useState } from 'react'
import { Grid } from '@mui/material'
import ItemCard from './ItemCard'
import { Container } from '@mui/system'
import Input from './TextField'

const body = [
	'Праздничная брошь "Рождественский Гномик" станет отличным украшением к вашему наряду',
	'Необычная брошь "Снегирь" станет отличным новогодним подарком для ваших родных и близких',
	'Необычная брошь "Ёжик" придаст вашему наряду оригинальности и чувство хорошего вкуса',
	'Брошь "Валентинка" исполнена специально для того, чтобы ее подарить второй половинке на День всех влюблённых',
	'Брошь "Цветок сакуры" выполнена в нежно-розовых тонах, чтобы подчеркнуть женственность и красоту обладательницы',
	'Брошь "Черная Орхидея" подчеркнет вашу особенность, а ваше чувство стиля не останется без внимания',
	'Брошь "Попугай Каик" предназначена для особых случаев, когда нужно проявить оригинальность',
	'Очень миленькая брошка "Совушка" не оставит без внимания даже самых равнодушных людей',
	'Малютка "Ёжик в клубочке" очень милый и необычный аксессуар для любителей диких зверьков'
]
const cardList = [
	{ id: 1, src: './ItemCardImg/card1.JPG', title: 'Рождественский Гном', body: body[0], price: 'цена: 1000', action: 'Купить' },
	{ id: 2, src: './ItemCardImg/card2.JPG', title: 'Снегирь', body: body[1], price: 'цена: 1700', action: 'Купить' },
	{ id: 3, src: './ItemCardImg/card3.JPG', title: 'Ёжик', body: body[2], price: 'цена: 1100', action: 'Купить' },
	{ id: 4, src: './ItemCardImg/card4.JPG', title: 'Валентинка', body: body[3], price: 'цена: 1200', action: 'Купить' },
	{ id: 5, src: './ItemCardImg/card5.JPG', title: 'Цветок Сакуры', body: body[4], price: 'цена: 1500', action: 'Купить' },
	{ id: 6, src: './ItemCardImg/card6.JPG', title: 'Чёрная Орхидея', body: body[5], price: 'цена: 1400', action: 'Купить' },
	{ id: 7, src: './ItemCardImg/card7.JPG', title: 'Попугай Каик', body: body[6], price: 'цена: 2000', action: 'Купить' },
	{ id: 8, src: './ItemCardImg/card8.JPG', title: 'Совушка', body: body[7], price: 'цена: 1300', action: 'Купить' },
	{ id: 9, src: './ItemCardImg/card9.JPG', title: 'Ёжик в клубочке', body: body[8], price: 'цена: 1100', action: 'Купить' },
]

export default function Main() {
	return (
		<Container sx={{ mt: '1rem' }}>
			<Input />
			<Grid container spacing={2} sx={{ mt: '1rem' }}>
				{cardList.map(card => {
					return <ItemCard
						key={card.id}
						src={card.src}
						title={card.title}
						body={card.body}
						action={card.action}
						price={card.price}
					/>
				})}
			</Grid>
		</Container>
	)
}
