import { useContext} from 'react';
import styles from './Header.module.scss';
import Title from '../../atoms/title/Title';
import ThemeButton from '../../atoms/theme-button/ThemeButton';
import { ThemeContext } from '../../organism/dev-finder/DevFinder';

const Header = ({toggleThemeClick}) =>{
    const darkTheme = useContext(ThemeContext);
    const renderThemeButtonTitle = () =>{
        return darkTheme ? 'LIGHT' : 'DARK';
    }
    return(
        <div className={styles['header']}>
            <Title title='devfinder'/>
            <ThemeButton toggleThemeClick={toggleThemeClick} title={renderThemeButtonTitle()}/>
        </div>
    )
}

export default Header;