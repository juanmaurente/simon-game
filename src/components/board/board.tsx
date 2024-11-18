import React, { useState, useEffect } from 'react';
import Box from '../box/box';
import styles from './board.module.css';

const Board = () => {
	const colors = ['red', 'blue', 'yellow', 'green'];
	const [round, setRound] = useState(0);
	const [gameSequence, setGameSequence] = useState<string[]>([]);
	const [userArray, setUserArray] = useState<string[]>([]);
	const [activeColor, setActiveColor] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);



	useEffect(() => {
		console.log(userArray, gameSequence);
	}, [userArray, gameSequence]);

	// Generar una nueva secuencia cuando comienza una ronda
	useEffect(() => {
		if (round > 0) {
			const newColor = colors[Math.floor(Math.random() * colors.length)];
			setGameSequence((prevSequence) => [...prevSequence, newColor]);
			setUserArray([]); // Limpiar selección del usuario
		}
	}, [round]);

	// Mostrar la secuencia de colores
	useEffect(() => {
		if (gameSequence.length > 0 && round > 0) {
			let index = 0;

			const showSequence = setInterval(() => {
				// Activar el color actual
				setActiveColor(gameSequence[index]);

				// Desactivar el color después de 500ms
				setTimeout(() => setActiveColor(null), 500);

				index++;

				// Si llegamos al final de la secuencia, detener el intervalo
				if (index >= gameSequence.length) {
					clearInterval(showSequence);
				}
			}, 1000);

			return () => clearInterval(showSequence);
		}
	}, [gameSequence]);

	// Validar las selecciones del usuario
	useEffect(() => {
		if (userArray.length > 0) {
			const currentIndex = userArray.length - 1;

			// Verificar si la selección es correcta
			if (userArray[currentIndex] !== gameSequence[currentIndex]) {
				console.log('PERDISTE');
				resetGame();
			} else if (userArray.length === gameSequence.length) {
				console.log('ÉXITO');
				triggerSuccess();
				setTimeout(() => setRound((prevRound) => prevRound + 1), 1000); // Nueva ronda después del éxito
			}
		}
	}, [userArray]);

	// Señal de éxito
	const triggerSuccess = () => {
		setSuccess(true);
		setTimeout(() => setSuccess(false), 1500);
	};

	// Manejar selección del usuario
	const handleSelection = (color: string) => {
		setUserArray((prev) => [...prev, color]);
	};

	// Reiniciar el juego
	const resetGame = () => {
		setGameSequence([]);
		setUserArray([]);
		setRound(0);
	};

	// Iniciar el juego
	const startGame = () => {
		setRound(1);
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
							isActive={activeColor === color}
							isSuccess={success}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Board;
