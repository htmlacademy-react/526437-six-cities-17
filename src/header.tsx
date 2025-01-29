import { Link, useNavigate } from 'react-router-dom';
import {AppRouter} from './constant';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { store } from './store';
import {fetchSignOutAction} from './store/actions/api-actions';
import {dispatchDeleteLogin} from './store/userProcess';
import { authStatus } from './store/userProcess/selector';


export default function Header(){
  const showAuth = useSelector((state: RootState) =>(authStatus(state)));
  const navigate = useNavigate();
  const user = useSelector((state: RootState)=> state.USER.userInfo);
  const favoriteOffersLength = useSelector((state: RootState) => state.OFFER.favoriteOffers).length;
  const signOut = async() => {
    await store.dispatch(fetchSignOutAction());
    store.dispatch(dispatchDeleteLogin());
    navigate({pathname: AppRouter.Root});
  };


  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            {showAuth ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRouter.Favorites}>
                    <div style={{backgroundImage: `url(${user.avatarUrl})`}} className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user.email}</span>

                    <span className="header__favorite-count">{favoriteOffersLength}</span>
                  </Link>
                </li>

                <li className="header__nav-item">
                  <div className="header__nav-link header__signout "
                    style={{cursor: 'pointer'}}
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Sign out
                  </div>
                </li>
              </ul> :
              <ul>
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile header__login" to={AppRouter.Login}>
             Sign in
                  </Link>
                </li>
              </ul>}
          </nav>
        </div>
      </div>
    </header>
  );
}
