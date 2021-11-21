import styes from './Title.module.scss';

const Title = ({title}) =>{
    return(
        <h1 className={styes['title']}>
            {title}
        </h1>
    )
}

export default Title;