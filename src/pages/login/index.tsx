import { useEffect, useState } from 'react';
import {store} from '../../store';
import { fetchLogin } from '../../store/actions/apiActions';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Login() {


  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const status = useSelector(()=> store.getState().USER.authorizationStatus);
  const path = searchParams.get('next');

  useEffect(() => {
    if (status && path) {
      navigate({
        pathname: path,
      });
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
    const authStatus = store.getState().USER.authorizationStatus;
    if (authStatus){
      navigate(goTo);
    }

  };
  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <div className="login__form form" >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input onChange={setEmail} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input onChange={setPassWord} className="login__input form__input" type="password" name="password" placeholder="Password" required />
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
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
