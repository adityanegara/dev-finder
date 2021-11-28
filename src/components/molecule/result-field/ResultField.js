import styles from './ResultField.module.scss';
import { useContext} from 'react';
import Card from '../../atoms/card/Card';
import profileImage from '../../../assets/images/octocat.png'
import CardSecondary from '../../atoms/card-secondary/CardSecondary';
import whiteLocationIcon from '../../../assets/icons/map-white.png';
import grayLocationIcon from '../../../assets/icons/map-gray.png';
import whiteTwitterIcon from '../../../assets/icons/twitter-white.png';
import grayTwitterIcon from '../../../assets/icons/twitter-gray.png';
import whiteLinkIcon from '../../../assets/icons/link-white.png';
import grayLinkIcon from '../../../assets/icons/link-gray.png';
import whiteBuilding from '../../../assets/icons/building-white.png';
import grayBuilding from '../../../assets/icons/building-gray.png';
import { ThemeContext } from '../../organism/dev-finder/DevFinder';
import moment from 'moment';
import convertIsoDate from '../../../helper/convertIsoDate';

const ResultField = ({user, noUser}) =>{
    const darkTheme = useContext(ThemeContext);
    const renderLocationIcon = () =>{
        return darkTheme ?  whiteLocationIcon : grayLocationIcon;
    }
    const renderTwitterIcon = () =>{
        return darkTheme ?  whiteTwitterIcon : grayTwitterIcon;
    }

    const renderLinkIcon = () =>{
        return darkTheme ?  whiteLinkIcon : grayLinkIcon;
    }
 
    const renderBuildingIcon = () =>{
        return darkTheme ?  whiteBuilding : grayBuilding;
    }

    const renderAccountText = () =>{
        return darkTheme ?  styles['text-blue'] : styles['text-green'];
    }

    const renderEmptyCard = () =>{
        if(noUser){
            return (
                <p className={`${styles['search-user__text']} ${styles['text-red']}`}>Username not found.</p>
            )
        }else{
            return (
                <p className={`${styles['search-user__text']}`}>Please search a user.</p>
            )
        }
       
    }

    const renderText = (bio, noText) =>{
        if(bio){
            return (
                <p>
                    {bio}
                </p>
            )
        }else{
            return (
                <p className={styles['text-secondary']}>
                   {noText}
                </p>
            )
        }
    }

    const renderUser = () =>{
        if(user){
            return(
            <Card>
                <div className={styles['grid']}>
                    <div className={styles['profile-picture']}>
                        <img alt='profile-image' src={user.avatar_url}/>
                    </div>
                <div className={styles['profile-info']}>
                    <div className={styles['username']}>
                        <p className={styles['text-important']}>
                            {user.name}
                        </p>
                        <p className={renderAccountText()}>
                            {`@${user.login }`}
                        </p>
                    </div>
                <div className={styles['join-date']}>
                    <p>{`Joined ${convertIsoDate(user.created_at)}`}</p>
                </div>
                </div>
                <div className={styles['profile-bio']}>
                  {renderText(user.bio, 'User has no bio')}
                </div>
                <div className={styles['profile-card']}>
                    <CardSecondary>
                        <div className={styles['flex-evenly']}>
                            <div className={styles['flex-column']}>
                                <p className={styles['text-secondary']}>
                                    Repos
                                </p>
                                <p className={styles['text-important']}>
                                    {user.public_repos}
                                </p>
                            </div>
                        <div className={styles['flex-column']}>
                            <p className={styles['text-secondary']}>
                                Followers
                            </p>
                            <p className={styles['text-important']}>
                                {user.followers}
                            </p>
                        </div>
                        <div className={styles['flex-column']}>
                            <p className={styles['text-secondary']}>
                                Following
                            </p>
                            <p className={styles['text-important']}>
                                {user.following}
                            </p>
                            </div>
                        </div>
                    </CardSecondary>
                </div>
                <div className={styles['profile-link']}>
                    <div className={styles['link-icon']}>
                        <img alt='location-icon' src={renderLocationIcon()}/>
                        {renderText(user.location, 'Location not available.')}
                    </div>
                    <div className={styles['link-icon']}>
                        <img alt='link-icon' src={renderLinkIcon()}/>
                        {renderText(user.blog, 'Blog not available.')}
                    </div>
                    <div className={styles['link-icon']}>
                         <img alt='twitter-icon' src={renderTwitterIcon()}/>
                         {renderText(user.twitter_username, 'Twitter not available.')}
                    </div>
                    <div className={styles['link-icon']}>
                        <img alt='building-icon' src={renderBuildingIcon()}/>
                        {renderText(user.company, 'Company not available.')}
                    </div>
                    </div>
                    </div>
                </Card>
            )
        }else{
            return(
                <Card>
                   {renderEmptyCard()}
                </Card>
            )
        }
    }
    return(
      renderUser()
        
    )
}

export default ResultField;