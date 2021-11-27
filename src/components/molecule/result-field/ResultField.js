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

const ResultField = () =>{
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
    return(
        <Card>
          <div className={styles['grid']}>
              <div className={styles['profile-picture']}>
                  <img alt='profile-image' src={profileImage}/>
              </div>
              <div className={styles['profile-info']}>
                    <div className={styles['username']}>
                        <p className={styles['text-important']}>
                            The Octocat
                        </p>
                        <p className={styles['text-blue']}>
                            @octocat
                        </p>
                    </div>
                    <div className={styles['join-date']}>
                        <p>Joined 25 Jan 2011</p>
                    </div>
              </div>
              <div className={styles['profile-bio']}>
                 <p>
                     Lorem ipsum dolor sit amet, conscetetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                 </p>
              </div>
              <div className={styles['profile-card']}>
                  <CardSecondary>
                      <div className={styles['flex-evenly']}>
                          <div className={styles['flex-column']}>
                                <p className={styles['text-secondary']}>
                                    Repos
                                </p>
                                <p className={styles['text-important']}>
                                    8
                                </p>
                          </div>
                          <div className={styles['flex-column']}>
                                <p className={styles['text-secondary']}>
                                    Followers
                                </p>
                                <p className={styles['text-important']}>
                                    3938
                                </p>
                          </div>
                          <div className={styles['flex-column']}>
                                <p className={styles['text-secondary']}>
                                    Following
                                </p>
                                <p className={styles['text-important']}>
                                    9
                                </p>
                          </div>
                      </div>
                  </CardSecondary>
              </div>
              <div className={styles['profile-link']}>
                  <div className={styles['link-icon']}>
                      <img alt='location-icon' src={renderLocationIcon()}/>
                      <p>San Francisco</p>
                  </div>
                  <div className={styles['link-icon']}>
                      <img alt='link-icon' src={renderLinkIcon()}/>
                      <p>https://github.blog</p>
                  </div>
                  <div className={styles['link-icon']}>
                      <img alt='twitter-icon' src={renderTwitterIcon()}/>
                      <p className={styles['text-secondary']}>Not available</p>
                  </div>
                  <div className={styles['link-icon']}>
                      <img alt='building-icon' src={renderBuildingIcon()}/>
                      <p>agithub</p>
                  </div>
              </div>
          </div>
        </Card>
    )
}

export default ResultField;