import { useContext} from 'react';
import styles from './ThemeButton.module.scss';
import moonIcon from "../../../assets/icons/icon-moon.svg";
import sunIcon from "../../../assets/icons/icon-sun.svg";
import { ThemeContext } from '../../organism/dev-finder/DevFinder';
 const ThemeButton = ({title, toggleThemeClick}) =>{
    const darkTheme = useContext(ThemeContext);
    const renderIcon = () =>{
      return darkTheme ? sunIcon : moonIcon;
    }

     return(
         <button className={`${styles['theme-button']} ${darkTheme ? `` : `${styles['white-theme']}`}`} onClick={toggleThemeClick}>
             <p>{title}</p>
             <img src={renderIcon()} alt='theme icon'/>
         </button>
     )
 }

 export default ThemeButton;