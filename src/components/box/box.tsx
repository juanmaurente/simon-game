import styles from './box.module.css';

interface Props {
	color: string;
	handleSelection: () => void;
}

const box = ({ color, handleSelection }: Props) => {
	return (
		<div
			className={`${styles.box} ${styles[color]}`}
			onClick={handleSelection}></div>
	);
};

export default box;
