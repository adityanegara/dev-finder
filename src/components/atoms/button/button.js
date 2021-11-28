import { useContext} from 'react';
import styles from './button.module.scss';
import { ThemeContext } from '../../organism/dev-finder/DevFinder';

const Button = ({text, onHandleClick}) =>{
    const darkTheme = useContext(ThemeContext);
    const renderWhiteTheme = () =>{
        return darkTheme ? '' : styles['white-theme']
    }
    return(
        <button className={`${styles['button']} ${renderWhiteTheme()}`} onClick={onHandleClick}>
            {text}
        </button>
    )
}

export default Button;