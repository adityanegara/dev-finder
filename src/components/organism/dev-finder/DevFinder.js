import React, { useState, useEffect} from 'react';
import styles from './DevFinder.module.scss';
import Header from '../../molecule/header/Header';
import InputField from '../../molecule/input-field/InputField';
import ResultField from '../../molecule/result-field/ResultField';

export const ThemeContext = React.createContext();

const DevFinder = () =>{
    const [darkTheme, setDarkTheme] = useState(true);
    const toggleTheme = () =>{
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    useEffect(()=>{
        if(darkTheme){
            document.body.style.backgroundColor = "#141d2f";
        }else{
            document.body.style.backgroundColor = "#F2F3F4";
        }
    }, [darkTheme])

    return(
        <ThemeContext.Provider value={darkTheme}>
            <div className={`${styles['container']} ${styles['margin-top']}`}>
                <Header toggleThemeClick = {toggleTheme}/>
                <InputField/>
                <ResultField/>
            </div>
        </ThemeContext.Provider>
    )
}

export default DevFinder;