import { useContext} from 'react';
import styles from './CardSecondary.module.scss';
import { ThemeContext } from '../../organism/dev-finder/DevFinder';
const CardSecondary = ({children}) =>{
    const darkTheme = useContext(ThemeContext);
    const renderWhiteTheme = () =>{
        return darkTheme ? '' : styles['white-background']
    }
    return(
        <div className={`${styles['card-secondary']} ${renderWhiteTheme()}`}>
            {children}
        </div>
    )
}

export default CardSecondary;