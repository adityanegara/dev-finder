import styles from './InputField.module.scss';
import SearchIcon from '../../atoms/searchIcon/SearchIcon';
import Button from '../../atoms/button/button';
import TransparentInput from '../../atoms/transparent-input/TransparentInput';
import Card from '../../atoms/card/Card';

const InputField = () =>{
    return(
        <Card>
            <div className={styles['input-content']}>
                <SearchIcon/>
                <TransparentInput placeholder='Github username...'/>
                <Button text='Search'/>
            </div>
        </Card>
    )
}

export default InputField;