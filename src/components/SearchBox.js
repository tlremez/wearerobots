import React from 'react';

function SearchBox({searchfield, searchChange}){
	console.log('SearchBox');
	return(
		<div className='pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue' 
		type='search' 
		placeholder='Search Robots'
		onChange={searchChange}
		/>
		</div>
		);
}

export default SearchBox;