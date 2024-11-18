import styles from './box.module.css';

interface Props {
	color: string;
	handleSelection: () => void;
	isActive: boolean;
	isSuccess: boolean;
}

const Box = ({ color, handleSelection, isActive, isSuccess }: Props) => {
	return (
		<div
			className={`${styles.box} 
							${isSuccess ? styles.success : styles[color]} 
							${isActive ? styles.active : ''}`}
			onClick={handleSelection}></div>
	);
};

export default Box;
