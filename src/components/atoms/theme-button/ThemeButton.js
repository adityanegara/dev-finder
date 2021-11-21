import styles from './ThemeButton.module.scss';
import moonIcon from "../../../assets/icons/icon-moon.svg";

 const ThemeButton = ({title}) =>{
     return(
         <button className={styles['theme-button']}>
             <p>{title}</p>
             <img src={moonIcon} alt='theme icon'/>
         </button>
     )
 }

 export default ThemeButton;