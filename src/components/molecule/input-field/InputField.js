import { useState } from 'react';
import styles from './InputField.module.scss';
import SearchIcon from '../../atoms/searchIcon/SearchIcon';
import Button from '../../atoms/button/button';
import TransparentInput from '../../atoms/transparent-input/TransparentInput';
import Card from '../../atoms/card/Card';


const InputField = ({onHandleSearchUser}) =>{
    const [keyword, setKeyword] = useState('');

    const handleButtonClick = () =>{
       onHandleSearchUser(keyword);
    }

    const handleKeywordChange = (newKeyword) =>{
        setKeyword(newKeyword);
    }
    return(
        <Card>
            <div className={`${styles['input-content']}`}>
                <SearchIcon/>
                <TransparentInput value={keyword} onHandleChange={handleKeywordChange} placeholder='Github username...'/>
                <Button onHandleClick={handleButtonClick} text='Search'/>
            </div>
        </Card>
    )
}

export default InputField;