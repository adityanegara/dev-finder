import searchIcon from '../../../assets/icons/icon-search.svg';
import searchIconGreen from '../../../assets/icons/icon-search-green.png';
import { useContext} from 'react';
import { ThemeContext } from '../../organism/dev-finder/DevFinder';

const SearchIcon = () =>{
    const darkTheme = useContext(ThemeContext);
    const renderIcon = () =>{
        return darkTheme ? searchIcon : searchIconGreen
    }
    return(
        <div >
            <img style={{
                width: '24px',
                height: '24px'
            }} src={renderIcon()} alt='Search Icon'/>
        </div>
    )
}

export default SearchIcon;