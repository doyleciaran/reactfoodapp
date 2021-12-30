import {Fragment} from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header} >
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div>
                <img src={mealsImage} className={classes['main-image']} alt='scran'/>
            </div>
        </Fragment>
    )
}

export default Header;
