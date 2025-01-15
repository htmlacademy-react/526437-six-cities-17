import { Link } from 'react-router-dom';
import {AppRouter} from './constant';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { store } from './store';
import {setSignOutAction, fetchCheckAuth} from './store/actions/apiActions';

export default function Header(){
  const isAuth = useSelector((state: RootState)=> state.authorizationStatus);
  const user = useSelector((state: RootState)=> state.userInfo);
  const favoriteOffersLength = useSelector((state: RootState) => state.favoriteOffers).length;
  const signOut = async() => {
    await store.dispatch(setSignOutAction());
    await store.dispatch(fetchCheckAuth());
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
            {isAuth ?
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
                  <Link className="header__nav-link" to={AppRouter.Root}
                    onClick={() => {
                      void signOut();
                    }}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul> :
              <ul>
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRouter.Login}>
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
