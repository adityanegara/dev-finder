import styles from './InputField.module.scss';
import SearchIcon from '../../atoms/searchIcon/SearchIcon';
import Button from '../../atoms/button/button';
import TransparentInput from '../../atoms/transparent-input/TransparentInput';

const InputField = () =>{
    return(
        <div className={styles['input']}>
            <div className={styles['input-content']}>
                <SearchIcon/>
                <TransparentInput placeholder='Search Github username...'/>
                <Button text='Search'/>
            </div>
        </div>
    )
}

export default InputField;