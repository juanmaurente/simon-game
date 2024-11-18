import Box from '../box/box';
import styles from './board.module.css';

const board = () => {
	return (
		<div className={styles.board}>
			<Box color={'red'} />
			<Box color={'blue'} />
			<Box color={'yellow'} />
			<Box color={'green'} />
		</div>
	);
};

export default board;
