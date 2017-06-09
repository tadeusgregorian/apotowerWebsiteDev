import React from 'react'
import './styles.scss'



//const inDevelopement = process.env.NODE_ENV === 'development'
export default({name, imgUrl, defaultText, password, onInputChange, onEnter, autocompleteOn}) => {

	const styleObj = {
		backgroundImage: 'url('+imgUrl+')'
	}

	return(
		<fb className='inputMinimalMain'>
			<input
				type={password ? "password" : "text"}
				name={name} style={styleObj}
				placeholder={defaultText}
				onKeyDown={(e)=> { if(e.key === 'Enter') onEnter && onEnter() }}
				onChange={(e)=>onInputChange(e.target.value)}
				autoComplete={autocompleteOn ? 'on' : 'new-password'}
			/>
		</fb>
	)
}
