import styles from './button.module.css';
import { clsx } from 'clsx';

const handleClick = () => {
  alert('Clicked.')
}

export default function Button({ children, type }) {
  return (
    <button
      className={clsx(styles['button'], {
        [styles['button--success']]: type === 'success',
        [styles['button--error']]: type === 'error',
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}