import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectCartHidden} from "../../redux/cart/cart.selector";
const Header=({currentUser, hidden})=>{
    return <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            {   
                currentUser ? <div className='div-option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                : <Link className='option' to='/signin'>SIGNIN</Link>
            }
            <CartIcon/>
        </div>
        {
              hidden 
             ? null
             : <CartDropdown/>
        }

    </div>
}
const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);