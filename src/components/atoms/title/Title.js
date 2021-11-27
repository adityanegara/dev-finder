import styes from './Title.module.scss';
import { useContext} from 'react';
import { ThemeContext } from '../../organism/dev-finder/DevFinder';

const Title = ({title}) =>{
    const darkTheme = useContext(ThemeContext);
    const renderGrayTitle = () =>{
        return darkTheme ? '' : styes['black'];
    }
    return(
        <h1 className={`${styes['title']} ${renderGrayTitle()}`}>
            {title}
        </h1>
    )
}

export default Title;