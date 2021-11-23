import styles from './CardSecondary.module.scss';

const CardSecondary = ({children}) =>{
    return(
        <div className={styles['card-secondary']}>
            {children}
        </div>
    )
}

export default CardSecondary;