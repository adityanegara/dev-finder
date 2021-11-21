import styles from './Header.module.scss';
import Title from '../../atoms/title/Title';
import ThemeButton from '../../atoms/theme-button/ThemeButton';

const Header = () =>{
    return(
        <div className={styles['header']}>
            <Title title='devfinder'/>
            <ThemeButton title='LIGHT'/>
        </div>
    )
}

export default Header;