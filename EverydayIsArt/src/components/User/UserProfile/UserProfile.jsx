import { Link } from "react-router-dom";

import Logout from '../../Authorization/Logout/Logout.jsx';

import FavouriteIcon from '../../../assets/images/favourite.svg';
import LogoutIcon from '../../../assets/images/cross.svg';

import './UserProfile.scss';

function UserProfile() {
    return (
        <div className="profile">
            <Link to='/favorites' className='favorites-link'>
                <div className="profile-group">
                    <img src={FavouriteIcon} className="profile-favourite-icon"></img>
                    Избранное
                </div>
            </Link>
            <div className="line-primary"></div>
            <div className="profile-group">
                <img src={LogoutIcon} className="profile-logout-icon"></img>
                <Logout></Logout>
            </div>
        </div>
    );
}

export default UserProfile;