import styles from './button.module.scss';

const Button = ({text, onHandleClick}) =>{
    return(
        <button className={styles['button']} onClick={onHandleClick}>
            {text}
        </button>
    )
}

export default Button;