import styles from './card.module.css';
import { clsx } from 'clsx';

export default function card({ children, type }) {
  return (
    <div
      className={clsx(styles['card'], {
        [styles['card--info']]: type === 'info',
        [styles['card--pop']]: type === 'pop',
      })}
    >
      {children}
    </div>
  );
}