import { useContext} from 'react';
import styles from './TransparentInput.module.scss';
import { ThemeContext } from '../../organism/dev-finder/DevFinder';
const TransparentInput = ({placeholder}) =>{
    const darkTheme = useContext(ThemeContext);
    const renderGrayPlaceholder = () =>{
        return darkTheme ?  '' : styles['gray'];
    }
    return(
        <div className={`${styles['search-input']} ${renderGrayPlaceholder()}`}>
            <input type='text' placeholder={placeholder} />
         </div>
    )
}

export default TransparentInput;