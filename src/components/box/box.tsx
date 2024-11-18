import styles from './box.module.css';

interface Props {
	color: string;
}

const box = ({ color }: Props) => {
	return <div className={`${styles.box} ${styles[color]}`}></div>;
};

export default box;
