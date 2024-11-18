import { useEffect } from 'react';
import styles from './box.module.css';

interface Props {
	color: string;
	handleSelection: () => void;
	isActive: boolean;
	isSuccess: boolean;
}

const Box = ({ color, handleSelection, isActive, isSuccess }: Props) => {
	useEffect(() => {
		console.log(isActive);
	}, [isActive]);

	return (
		<div
			className={`${styles.box} 
							${isSuccess ? styles.success : styles[color]} 
							${isActive ? styles[`${color}Active`] : ''}`}
			onClick={handleSelection}></div>
	);
};

export default Box;
