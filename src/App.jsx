import React, { useState } from 'react';
import './App.css';
import Search from './Search'
import Course from './Course';
import Cart from './Cart';
import ReactDOM from 'react-dom'

function App() {
	const [courses, setCourses] = useState([
		{ id: 1, 
		  name: 'idly', 
		  price: 7, 
		  image: 'idly.jpeg'

		},

		{ id: 2, 
		  name: 'dosa', 
		  price: 45, 
		  image: 'dosai.jpeg'

		},

		{ id: 3, 
		  name: 'poori', 
		  price: 15, 
		  image:'poori.jpeg'

		},

		{ id: 4, 
		  name: 'pongal', 
		  price: 40, 
		  image:'pongal.jpeg'
	
		},

		{ id: 5, 
		  name: 'chapathi', 
		  price: 20, 
		  image:'chappathi.jpeg'
		
		},

		{ id: 6, 
		  name: 'parotta', 
		  price: 17, 
		  image:'parotta.jpeg'
		},

		{ id: 7, 
		  name: 'idiyaapam', 
		  price: 30, 
		  image:'idi.jpeg'
		  },
				
		{ id: 8, 
		  name: 'vada', 
		  price: 8, 
		  image:'vada.jpeg'

		},

		{ id: 9, 
		  name: 'bonda', 
		  price: 10, 
		  image:'bonda.jpeg'
		},

		{ id: 10, 
		  name: 'samosa', 
		  price: 8, 
		  image:'samosa.jpeg'
		},
	]);


	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (ecourse) => {
		const alreadyCourses = cartCourses.find(item => item.product.id === ecourse.id);

		if (alreadyCourses) 
			{
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === ecourse.id ? 
				{ 
				item, quantity: item.quantity + 1 } : item
			);

			setCartCourses(latestCartUpdate);
		} 
		else
		{
			setCartCourses([...cartCourses, {product: ecourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (eCourse) => {
		const updatedCart = cartCourses.filter(item => item.product.id !== eCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses.reduce((total, item) => 
		total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (

		<div className="App">
			
			<Search searchCourse={searchCourse} 
				    courseSearchUserFunction = {courseSearchUserFunction}/>

			<main className="App-main">
				<Course courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}/>

				<Cart cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={totalAmountCalculationFunction}
					setCartCourses={setCartCourses}/>
			</main>
		</div>
	);
}

export default App;
