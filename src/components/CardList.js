import React from 'react';
import Card from './Card';

function CardList({robots}){
	console.log('CardList');
	return(
		<div>
		    {
		    	robots.map((user, i) =>{
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
							/>
					);
				})
		    }
	    </div>
		);
}

export default CardList;