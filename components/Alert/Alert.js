import styles from './alert.module.css';
import { clsx } from 'clsx';

export default function Alert({ children, type }) {
  return (
    <div
      className={clsx(styles['alert'], {
        [styles['alert--success']]: type === 'success',
        [styles['alert--error']]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}