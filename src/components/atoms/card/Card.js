import { useContext} from 'react';
import styles from './Card.module.scss';
import { ThemeContext } from '../../organism/dev-finder/DevFinder';
const Card = ({children}) =>{
    const darkTheme = useContext(ThemeContext);
    const renderWhiteTheme = () =>{
        return darkTheme ? '' : styles['white-background']
    }
    return(
        <div className={`${styles['card']} ${renderWhiteTheme()}`}>
            {children}
        </div>
    )
}

export default Card;