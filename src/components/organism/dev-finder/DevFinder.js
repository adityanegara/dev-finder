import styles from './DevFinder.module.scss';
import Header from '../../molecule/header/Header';
import InputField from '../../molecule/input-field/InputField';
import ResultField from '../../molecule/result-field/ResultField';

const DevFinder = () =>{
    return(
        <div className={`${styles['container']} ${styles['margin-top']}`}>
            <Header/>
            <InputField/>
            <ResultField/>
        </div>
    )
}

export default DevFinder;