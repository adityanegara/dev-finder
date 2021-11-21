import styles from './TransparentInput.module.scss';

const TransparentInput = ({placeholder}) =>{
    return(
        <div className={styles['search-input']}>
            <input type='text' placeholder={placeholder} />
         </div>
    )
}

export default TransparentInput;