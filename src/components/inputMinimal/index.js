import React from 'react'
import './styles.scss'



//const inDevelopement = process.env.NODE_ENV === 'development'
export default({name, imgUrl, defaultText, password, onInputChange}) => {

	const styleObj = {
		backgroundImage: 'url('+imgUrl+')'
	}

	return(
		<div className='inputMinimalMain'>
			<input
				type={password ? "password" : "text"}
				name={name} style={styleObj}
				placeholder={defaultText}
				onChange={(e)=>onInputChange(e.target.value)}
			/>
		</div>
	)
}
