import styles from './DevFinder.module.scss';
import Header from '../../molecule/header/Header';
import InputField from '../../molecule/input-field/InputField';

const DevFinder = () =>{
    return(
        <div className={`${styles['container']} ${styles['margin-top']}`}>
            <Header/>
            <InputField/>
        </div>
    )
}

export default DevFinder;