import React, { useState, useEffect } from 'react';
import Box from '../box/box';
import styles from './board.module.css';

const Board = () => {
	const colors = ['red', 'blue', 'yellow', 'green'];
	const [round, setRound] = useState(0);
	const [gameSequence, setGameSequence] = useState<string[]>([]);
	const [userArray, setUserArray] = useState<string[]>([]);
	const [error, setError] = useState(false);

	// Generar una nueva secuencia cuando comienza una ronda
	useEffect(() => {
		if (round > 0) {
			const newColor = colors[Math.floor(Math.random() * colors.length)];
			setGameSequence((prevSequence) => [...prevSequence, newColor]);
			setUserArray([]); // Limpiar selección del usuario
		}
	}, [round]);

	// Validar las selecciones del usuario
	useEffect(() => {
		if (userArray.length > 0) {
			const currentIndex = userArray.length - 1;

			// Verificar si la selección es correcta
			if (userArray[currentIndex] !== gameSequence[currentIndex]) {
				console.log('PERDISTE, VUELVE A INTENTARLO');
				setError(true);
				setGameSequence([]); // Reiniciar secuencia
				setUserArray([]);
				setRound(0);
			} else if (userArray.length === gameSequence.length) {
				console.log('ÉXITO - SIGUIENTE RONDA');
				setRound((prevRound) => prevRound + 1);
			}
		}
	}, [userArray]);

	const handleSelection = (color: string) => {
		if (!error) {
			setUserArray((prev) => [...prev, color]);
		}
	};

	const startGame = () => {
		setRound(1); // Iniciar el juego
		setError(false);
	};

	return (
		<div className={styles.container}>
			{round === 0 && (
				<button className={styles.startButton} onClick={startGame}>
					Iniciar Juego
				</button>
			)}
			{round > 0 && (
				<div className={styles.board}>
					{colors.map((color) => (
						<Box
							key={color}
							color={color}
							handleSelection={() => handleSelection(color)}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Board;
