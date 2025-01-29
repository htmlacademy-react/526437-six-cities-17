import { useEffect, useRef, useState } from 'react';
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
  const valid = useRef(false);

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const validEmail = (email: string) =>String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) || false;
  const validPass = (pass: string) =>String(pass)
    .toLowerCase()
    .match(/^(?=.*[0-9])(?=.*[a-z])(?!.* ).{2,16}$/
    ) || false;
  const handleSetCity = (city: TCity) => {
    dispatch(dispatchSelectedCity(city));
  };
  const handleSubmitLoginForm = async() => {
    const goTo = '/';
    await store.dispatch(fetchLogin(form));
    const isAuth = store.getState().USER.authorizationStatus;
    if (isAuth){
      navigate(goTo);
    }

  };

  useEffect(()=> {
    const listener = (e: KeyboardEvent) => {
      const enter = e.code === 'Enter';
      if(valid.current && enter) {
        handleSubmitLoginForm();
      }
    };
    window.addEventListener('keypress', listener);
    return () => window.removeEventListener('keypress', listener);
  },);

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

  useEffect(()=>{
    const email = Boolean(validEmail(form.email));
    const pass = Boolean(validPass(form.password));
    if(email && pass){
      valid.current = true;
    }else{
      valid.current = false;
    }
  }, [form.email, form.password]);


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
                <input onChange={setEmail}
                  className="login__input form__input"
                  id="email"
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
                  id="pass"
                  name="password"
                  placeholder="Password"
                  maxLength={16}
                  required
                />
              </div>
              <button
                disabled={!valid.current}
                onClick={() => {
                  void handleSubmitLoginForm();
                }} className="login__submit form__submit button"
              >Sign in
              </button>
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
