import React, { useState, useEffect} from 'react';
import styles from './DevFinder.module.scss';
import Header from '../../molecule/header/Header';
import InputField from '../../molecule/input-field/InputField';
import ResultField from '../../molecule/result-field/ResultField';
import {searchUser} from '../../../api/user';

export const ThemeContext = React.createContext();

const DevFinder = () =>{
    const [darkTheme, setDarkTheme] = useState(true);
    const [user, setUser] = useState();
    const [noUser,setNoUser] = useState(false);
    const handleSearchUser  =  async (keyword) =>{
        const response = await searchUser(keyword);
        if(response.message){
            setUser();
            setNoUser(true);
        }else{
            setUser(response);
        }
    }
    const toggleTheme = () =>{
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    useEffect(()=>{
        if(darkTheme){
            document.body.style.backgroundColor = "#141d2f";
        }else{
            document.body.style.backgroundColor = "#FEFBF3";
        }
    }, [darkTheme])

    return(
        <ThemeContext.Provider value={darkTheme}>
            <div className={`${styles['container']} ${styles['margin-top']}`}>
                <Header toggleThemeClick = {toggleTheme}/>
                <InputField onHandleSearchUser={handleSearchUser}/>
                <ResultField noUser={noUser} user={user}/>
            </div>
            <a href="tel://+6281289503000">Testing Call</a>
            <br></br>
            <a href="sms://+6287884008978?body=I%20Would%20like%20to%20check%20the%20availability%20for%20Listing%20Headline%20QA,%20Testing%20QA%20123%20Edit,%20https://livethere.senisites.com/listing/building-testing-edit-17.">Testing SMS</a>
        </ThemeContext.Provider>
    )
}

export default DevFinder;