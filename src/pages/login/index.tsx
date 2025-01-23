import { useEffect, useState } from 'react';
import {store} from '../../store';
import { fetchLogin } from '../../store/actions/api-actions';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authStatus } from '../../store/userProcess/selector';
import { ToastContainer } from 'react-toastify';
import {dispatchSelectedCity} from '../../store/offerProcess';

import { RootState } from '../../store';
import { TCity } from '../../types/city-types';
import { AppRouter } from '../../constant';

export default function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const status = useSelector((state: RootState) =>(authStatus(state)));
  const cities = useSelector((state: RootState) => state.OFFER.cityes);
  const randomCity = Math.round(Math.random() * cities.length);
  const path = searchParams.get('next');
  const handleSetCity = (city: TCity) => {
    dispatch(dispatchSelectedCity(city));
  };

  useEffect(() => {
    if (status) {
      if(path){
        navigate({
          pathname: path,
        });
      }else{
        navigate({
          pathname: '/',
        });
      }
    }
  }, [status, path, navigate]);

  const [form, setForm] = useState({
    email: '',
    password: ''
  });


  const setEmail = (e: React.ChangeEvent<HTMLElement>) => {
    const {value} = e.currentTarget as never;
    setForm({
      ...form,
      email: value,
    });
  };
  const setPassWord = (e: React.ChangeEvent<HTMLElement>) => {
    const {value} = e.currentTarget as never;
    setForm({
      ...form,
      password: value,
    });
  };


  const handleSubmitLoginForm = async() => {
    const goTo = '/';
    await store.dispatch(fetchLogin(form));
    const isAuth = store.getState().USER.authorizationStatus;
    if (isAuth){
      navigate(goTo);
    }

  };
  return (
    <div className="page page--gray page--login">
      <ToastContainer/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <div className="login__form form" >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input onChange={setEmail} className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input onChange={setPassWord}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div onClick={() => {
                void handleSubmitLoginForm();
              }} className="login__submit form__submit button"
              >Sign in
              </div>
            </div>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={AppRouter.Root} className="locations__item-link">
                <span onClick={() => handleSetCity(cities[randomCity])}> {cities[randomCity]?.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
