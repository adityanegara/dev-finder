import { useContext} from 'react';
import styles from './TransparentInput.module.scss';
import { ThemeContext } from '../../organism/dev-finder/DevFinder';
const TransparentInput = ({placeholder, value, onHandleChange}) =>{
    const darkTheme = useContext(ThemeContext);
    const renderGrayPlaceholder = () =>{
        return darkTheme ?  '' : styles['gray'];
    }
    return(
        <div className={`${styles['search-input']} ${renderGrayPlaceholder()}`}>
            <input onChange={(e)=>{onHandleChange(e.target.value)}} type='text' value={value} placeholder={placeholder} />
         </div>
    )
}

export default TransparentInput;