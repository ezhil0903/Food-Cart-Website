import React from 'react';
import UserCartComponent from './Cart';

function SearchComponent({ searchCourse, courseSearchUserFunction }) {
	return (
		<header className="App-header">
			<h1>Ezhil Veg Restaurant</h1>
			<div className="search-bar">
				<input type="text" placeholder="Search for breakfast"
				 value={searchCourse} onChange={courseSearchUserFunction}/>

			</div>
			
		</header>
		
		
	);
}


export default SearchComponent;
