import { useState } from 'react';
import Box from '../box/box';
import styles from './board.module.css';

const board = () => {
	const colors = ['red', 'blue', 'yellow', 'green'];
	const [round, setRound] = useState(0);

	// Cretae an array according to the round number
	// create a Second array with selections of the user
	// compare arrays if they are equal
	// if they are equal copy the first array and add a new color on the original array. If different change all colors to red and start over
	// Flash ligths when selected

	const handleSelection = (color: string) => {
		console.log(`Selected color: ${color}`);
	};

	return (
		<div className={styles.container}>
			<div className={styles.board}>
				<Box
					color={'red'}
					handleSelection={() => handleSelection('red')}
				/>
				<Box
					color={'blue'}
					handleSelection={() => handleSelection('blue')}
				/>
				<Box
					color={'yellow'}
					handleSelection={() => handleSelection('yellow')}
				/>
				<Box
					color={'green'}
					handleSelection={() => handleSelection('green')}
				/>
			</div>
		</div>
	);
};

export default board;
